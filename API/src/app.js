import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { randomBytes, randomUUID, scryptSync, timingSafeEqual, createHash } from 'node:crypto';

const hash = x => createHash('sha256').update(x).digest('hex');
const passwordHash = (password, salt) => scryptSync(password, salt, 64).toString('hex');
const publicUser = u => ({ id:u.id, alias:u.alias });
const error = (status, message) => Object.assign(new Error(message), {status});
const str = (v,min,max) => typeof v === 'string' && v.trim().length>=min && v.trim().length<=max;
const integer = (v,max) => Number.isSafeInteger(v) && v>=0 && v<=max;

export function createApp({dbPath=':memory:', commit=process.env.RENDER_GIT_COMMIT || 'local'}={}) {
 const db=new DatabaseSync(dbPath); db.exec(`PRAGMA foreign_keys=ON;
 CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY, alias TEXT NOT NULL COLLATE NOCASE UNIQUE, password_hash TEXT NOT NULL, salt TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS games(id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), score INTEGER NOT NULL, duration_seconds INTEGER NOT NULL, defeats INTEGER NOT NULL, character TEXT NOT NULL, created_at TEXT NOT NULL);`);
 const q=(s,...args)=>db.prepare(s).get(...args); const all=(s,...args)=>db.prepare(s).all(...args); const run=(s,...args)=>db.prepare(s).run(...args);
 function auth(req){const token=/^Bearer ([a-f0-9]{64})$/.exec(req.headers.authorization||'')?.[1]; if(!token)throw error(401,'Autenticación requerida'); const u=q('SELECT u.id,u.alias FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?',hash(token),Date.now()); if(!u)throw error(401,'Sesión inválida o expirada');return u;}
 function send(res,status,body){res.writeHead(status,{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'});res.end(JSON.stringify(body));}
 async function body(req){let data=''; for await(const chunk of req){data+=chunk;if(Buffer.byteLength(data)>16384)throw error(413,'Solicitud demasiado grande');}try {let v=JSON.parse(data);if(!v || typeof v!=='object'||Array.isArray(v))throw 0;return v;}catch{throw error(400,'JSON inválido');}}
 const server=http.createServer(async(req,res)=>{let status=500; const start=Date.now();try{
  const url=new URL(req.url,'http://localhost'); const path=url.pathname;
  if(req.method==='GET'&&path==='/health'){q('SELECT 1 AS ok');status=200;send(res,status,{status:'ok',service:'api-xicotepec',version:'0.1.0',commit});}
  else if(req.method==='POST'&&path==='/v1/auth/register'){
   const x=await body(req);if(!str(x.alias,3,30)||!(/^[a-zA-Z0-9_-]+$/.test(x.alias))||!str(x.password,10,128))throw error(400,'Alias: 3 a 30 letras, números, guion o guion bajo; contraseña: 10 a 128 caracteres');
   if(q('SELECT id FROM users WHERE alias=?',x.alias))throw error(409,'Alias no disponible');
   const id=randomUUID(), salt=randomBytes(16).toString('hex');try{run('INSERT INTO users VALUES(?,?,?,?)',id,x.alias,passwordHash(x.password,salt),salt)}catch(e){if(String(e.message).includes('UNIQUE'))throw error(409,'Alias no disponible');throw e;} status=201;send(res,status,{id,alias:x.alias});
  } else if(req.method==='POST'&&path==='/v1/auth/login'){
   const x=await body(req); if(!str(x.alias,3,30)||!str(x.password,1,128))throw error(400,'Datos inválidos'); const u=q('SELECT * FROM users WHERE alias=?',x.alias); const salt=u?.salt||'00000000000000000000000000000000'; const computed=Buffer.from(passwordHash(x.password,salt),'hex'); const stored=Buffer.from(u?.password_hash||'0'.repeat(128),'hex'); if(!timingSafeEqual(computed,stored)||!u)throw error(401,'Credenciales inválidas');
   const token=randomBytes(32).toString('hex'), expires=Date.now()+24*60*60*1000;run('INSERT INTO sessions VALUES(?,?,?)',hash(token),u.id,expires);status=200;send(res,status,{token,expires_at:new Date(expires).toISOString(),user:publicUser(u)});
  } else if(req.method==='GET'&&path==='/v1/me'){status=200;send(res,status,auth(req));}
  else if(req.method==='POST'&&path==='/v1/games'){
   const u=auth(req),x=await body(req);if(typeof x.id!=='string'||!(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(x.id))||!integer(x.score,100000000)||!integer(x.duration_seconds,604800)||!integer(x.defeats,100000)||!['Balam','Rayo','Kiro'].includes(x.character))throw error(400,'Datos de partida inválidos');
   const old=q('SELECT * FROM games WHERE id=?',x.id);if(old){if(old.user_id!==u.id||old.score!==x.score||old.duration_seconds!==x.duration_seconds||old.defeats!==x.defeats||old.character!==x.character)throw error(409,'El ID ya corresponde a otro registro');status=200;send(res,status,{id:x.id,duplicate:true});}else{run('INSERT INTO games VALUES(?,?,?,?,?,?,?)',x.id,u.id,x.score,x.duration_seconds,x.defeats,x.character,new Date().toISOString());status=201;send(res,status,{id:x.id,duplicate:false});}
  } else if(req.method==='GET'&&path==='/v1/games'){const u=auth(req);status=200;send(res,status,{games:all('SELECT id,score,duration_seconds,defeats,character,created_at FROM games WHERE user_id=? ORDER BY created_at DESC LIMIT 100',u.id)});}
  else if(req.method==='GET'&&path==='/v1/stats'){const u=auth(req);status=200;send(res,status,q('SELECT COUNT(*) AS games, COALESCE(MAX(score),0) AS best_score, COALESCE(SUM(duration_seconds),0) AS total_seconds FROM games WHERE user_id=?',u.id));}
  else if(req.method==='GET'&&path==='/v1/leaderboard'){status=200;send(res,status,{ranking:all('SELECT u.alias, MAX(g.score) AS best_score FROM games g JOIN users u ON u.id=g.user_id GROUP BY u.id,u.alias ORDER BY best_score DESC,u.alias ASC LIMIT 20')});}
  else throw error(404,'Ruta no encontrada');
 }catch(e){status=e.status||500;if(!res.headersSent)send(res,status,{error:status===500?'Error interno':e.message});}finally{console.log(JSON.stringify({method:req.method,path:new URL(req.url,'http://localhost').pathname,status,duration_ms:Date.now()-start}));}});
 return {server,close:()=>new Promise((resolve,reject)=>server.close(e=>{db.close();e?reject(e):resolve();}))};
}

import {spawn,spawnSync} from 'node:child_process';
import {mkdir,rm,cp,writeFile,readFile} from 'node:fs/promises';
import {createHash, randomUUID} from 'node:crypto';
import {performance} from 'node:perf_hooks';
import path from 'node:path';

const root=process.cwd();
const evidence=path.resolve(process.env.EVIDENCE_DIR||'evidencias-locales');
const state=path.resolve(process.env.DEPLOY_DIR||'.local-deploy');
const port=Number(process.env.LOCAL_PORT||31378), base=`http://127.0.0.1:${port}`;
let lines=[], logs='', child;
const record=s=>{let line=`${new Date().toISOString()} ${s}`;lines.push(line);console.log(line)};
async function save(){await mkdir(evidence,{recursive:true});await writeFile(path.join(evidence,'pipeline.log'),lines.join('\n')+'\n');await writeFile(path.join(evidence,'servidor.log'),logs);}
async function step(name,args,file){record(`INICIO ${name}: npm ${args.join(' ')}`);const p=spawnSync('npm',args,{cwd:root,encoding:'utf8',timeout:120000});let out=(p.stdout||'')+(p.stderr||'');if(file)await writeFile(path.join(evidence,file),out);if(p.status!==0)throw new Error(`${name}: salida ${p.status}\n${out}`);record(`OK ${name} (código ${p.status})`);return out;}
async function start(commit){child=spawn(process.execPath,['src/server.js'],{cwd:path.join(state,'actual'),env:{...process.env,HOST:'127.0.0.1',PORT:String(port),DB_PATH:path.join(state,'demo.sqlite'),RENDER_GIT_COMMIT:commit},stdio:['ignore','pipe','pipe']});child.stdout.on('data',d=>logs+=d);child.stderr.on('data',d=>logs+=d);for(let i=0;i<80;i++){if(child.exitCode!==null)throw new Error(`Servidor terminó con código ${child.exitCode}`);try{const r=await fetch(base+'/health',{signal:AbortSignal.timeout(500)});const j=await r.json();if(r.ok&&j.commit===commit)return;}catch{}await new Promise(r=>setTimeout(r,100));}throw new Error('El servidor no respondió con la versión esperada');}
async function stop(){if(!child||child.exitCode!==null)return;let p=new Promise(r=>child.once('exit',r));child.kill('SIGTERM');await p;child=null;}
async function req(route,opts={}){let r=await fetch(base+route,opts);return {code:r.status,body:await r.json()};}
try{
 await mkdir(evidence,{recursive:true});await mkdir(state,{recursive:true});
 record('PIPELINE LOCAL · Inicio · entorno de demostración en 127.0.0.1');
 await step('Instalación reproducible',['ci'],'instalacion.log');
 await step('Pruebas automatizadas',['test'],'pruebas.log');
 await step('Construcción del artefacto',['run','build'],'construccion.log');
 await rm(path.join(state,'actual'),{recursive:true,force:true});await cp(path.join(root,'dist'),path.join(state,'actual'),{recursive:true});
 const app=await readFile(path.join(state,'actual','src','app.js'));const sha=createHash('sha256').update(app).digest('hex');const ver=`local-${sha.slice(0,12)}`;
 record(`OK artefacto versión 0.1.0, SHA-256 de app.js ${sha}`);
 await start(ver);record(`OK despliegue ${base} /health identifica ${ver}`);
 let h=await req('/health'),u=await req('/v1/games');
 if(h.code!==200||h.body.commit!==ver||u.code!==401)throw new Error('Fallo comprobación inicial');
 const alias='demo_'+randomUUID().slice(0,8),pass=randomUUID()+'Xx1';
 const post=(route,data,token)=>req(route,{method:'POST',headers:{'content-type':'application/json',...(token?{authorization:`Bearer ${token}`}:{})},body:JSON.stringify(data)});
 let reg=await post('/v1/auth/register',{alias,password:pass});let login=await post('/v1/auth/login',{alias,password:pass});
 if(reg.code!==201||login.code!==200)throw new Error('Error registro o acceso');
 let game={id:randomUUID(),score:1200,duration_seconds:240,defeats:1,character:'Balam'};let created=await post('/v1/games',game,login.body.token),repeat=await post('/v1/games',game,login.body.token);
 let stats=await req('/v1/stats',{headers:{authorization:`Bearer ${login.body.token}`}});let rank=await req('/v1/leaderboard');
 if(created.code!==201||repeat.code!==200||!repeat.body.duplicate||stats.body.games!==1||!rank.body.ranking.some(x=>x.alias===alias))throw new Error('Error comprobación funcional');
 const checks={health:h,unauthorized_status:u.code,register_status:reg.code,login_status:login.code,game_created_status:created.code,retry_status:repeat.code,retry_duplicate:repeat.body.duplicate,stats:stats.body,leaderboard_status:rank.code,ranking_contains_demo:true};
 await writeFile(path.join(evidence,'verificacion-funcional.json'),JSON.stringify(checks,null,2)+'\n');record('OK prueba funcional: salud, sesión, partida, reintento, estadísticas y ranking');
 let ms=[],success=0,errors=0,startTime=new Date().toISOString();
 for(let i=0;i<30;i++){let t=performance.now();let r=await fetch(base+'/health');ms.push(performance.now()-t);if(r.ok)success++;if(r.status>=500)errors++;await r.arrayBuffer();}
 let endTime=new Date().toISOString();ms.sort((a,b)=>a-b);const metrics={inicio:startTime,fin:endTime,ruta:'/health',solicitudes:ms.length,exitos:success,errores_5xx:errors,disponibilidad_muestra_porcentaje:success/ms.length*100,latencia_p95_ms:Number(ms[Math.ceil(ms.length*.95)-1].toFixed(2)),nota:'Muestra local breve y secuencial; no mide disponibilidad mensual ni tráfico real.'};
 await writeFile(path.join(evidence,'metricas.json'),JSON.stringify(metrics,null,2)+'\n');record(`OK medición local: ${success}/${ms.length} salud, p95 ${metrics.latencia_p95_ms} ms, ${errors} errores 5xx`);
 await stop();record('SIMULACIÓN: servicio detenido para comprobar recuperación');
 await start(ver);let restored=await req('/health');if(restored.code!==200||restored.body.commit!==ver)throw new Error('Recuperación fallida');
 let restoredStats=await req('/v1/stats',{headers:{authorization:`Bearer ${login.body.token}`}});if(restoredStats.code!==200||restoredStats.body.games!==1)throw new Error('Datos de prueba no recuperados');
 await writeFile(path.join(evidence,'recuperacion.json'),JSON.stringify({tipo:'Reinicio del mismo artefacto local tras parada simulada; no es reversión a un commit anterior.',health:restored,datos_locales_conservados:restoredStats.body.games===1},null,2)+'\n');
 record('OK recuperación del mismo artefacto y verificación de datos locales');await stop();record('PIPELINE LOCAL · EXITO · servicio detenido al concluir');await save();
}catch(e){record('ERROR '+e.message);await stop();await save();process.exitCode=1;}

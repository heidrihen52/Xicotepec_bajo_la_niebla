import {test} from 'node:test';import assert from 'node:assert/strict';import {randomUUID} from 'node:crypto';import {createApp} from '../src/app.js';
test('API: salud, cuentas, autorización, partidas idempotentes y ranking',async()=>{
 const app=createApp({commit:'test-commit'});await new Promise(r=>app.server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${app.server.address().port}`;
 async function req(path,{method='GET',data,token}={}){const r=await fetch(base+path,{method,headers:{...(data?{'content-type':'application/json'}:{}),...(token?{authorization:`Bearer ${token}`}:{})},body:data?JSON.stringify(data):undefined});return {status:r.status,body:await r.json()};}
 try{
  let r=await req('/health');assert.equal(r.status,200);assert.equal(r.body.commit,'test-commit');
  assert.equal((await req('/v1/games')).status,401);
  assert.equal((await req('/v1/auth/register',{method:'POST',data:{alias:'Balam',password:'a'}})).status,400);
  assert.equal((await req('/v1/auth/register',{method:'POST',data:{alias:'Balam',password:'contraseña-segura'}})).status,201);
  assert.equal((await req('/v1/auth/register',{method:'POST',data:{alias:'balam',password:'contraseña-segura'}})).status,409);
  assert.equal((await req('/v1/auth/login',{method:'POST',data:{alias:'Balam',password:'incorrecta'}})).status,401);
  r=await req('/v1/auth/login',{method:'POST',data:{alias:'Balam',password:'contraseña-segura'}});assert.equal(r.status,200);const token=r.body.token;
  assert.equal((await req('/v1/me',{token})).body.alias,'Balam');
  const game={id:randomUUID(),score:100,duration_seconds:30,defeats:1,character:'Balam'};
  assert.equal((await req('/v1/games',{method:'POST',data:game,token})).status,201);
  r=await req('/v1/games',{method:'POST',data:game,token});assert.equal(r.status,200);assert.equal(r.body.duplicate,true);
  assert.equal((await req('/v1/games',{method:'POST',data:{...game,score:101},token})).status,409);
  assert.equal((await req('/v1/games',{method:'POST',data:{...game,id:randomUUID(),score:-1},token})).status,400);
  assert.equal((await req('/v1/games',{token})).body.games.length,1);assert.equal((await req('/v1/stats',{token})).body.best_score,100);
  assert.deepEqual((await req('/v1/leaderboard')).body.ranking,[{alias:'Balam',best_score:100}]);
  await req('/v1/auth/register',{method:'POST',data:{alias:'Kiro',password:'otra-contraseña'}});r=await req('/v1/auth/login',{method:'POST',data:{alias:'Kiro',password:'otra-contraseña'}});assert.equal((await req('/v1/games',{token:r.body.token})).body.games.length,0);assert.equal((await req('/v1/games',{method:'POST',data:game,token:r.body.token})).status,409);
 }finally{await app.close();}
});

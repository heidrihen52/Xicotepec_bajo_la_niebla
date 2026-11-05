import { createApp } from './app.js';
const port=Number(process.env.PORT||3000);
if(!Number.isInteger(port)||port<1||port>65535)throw new Error('PORT inválido');
const host=process.env.HOST||'0.0.0.0';
const app=createApp({dbPath:process.env.DB_PATH||'./xicotepec.sqlite'});
app.server.listen(port,host,()=>console.log(JSON.stringify({event:'listening',port})));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,async()=>{await app.close();process.exit(0)});
//
import {mkdir,cp,writeFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await cp('src','dist/src',{recursive:true});
await cp('package.json','dist/package.json');
await writeFile('dist/BUILD.txt',`Versión 0.1.0\nCommit ${process.env.GITHUB_SHA||'local'}\n`);

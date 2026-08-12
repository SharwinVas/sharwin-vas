import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
const root=process.cwd();
const src=resolve(root,'public'); const dist=resolve(root,'dist');
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
await cp(src,dist,{recursive:true});
console.log('Build complete: dist/');

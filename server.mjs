import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root=process.argv.includes('--preview') ? join(process.cwd(),'dist') : join(process.cwd(),'public');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
const server=http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');let file=normalize(join(root,url.pathname==='/'?'index.html':url.pathname));if(!file.startsWith(root)){res.writeHead(403);res.end('Forbidden');return}let data;try{data=await readFile(file)}catch{data=await readFile(join(root,'index.html'));file=join(root,'index.html')}res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream'});res.end(data)}catch{res.writeHead(500);res.end('Server error')}});
const port=Number(process.env.PORT)||5173;server.listen(port,()=>console.log(`Local site: http://localhost:${port}`));

const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=8000;

const color=fs.readFileSync('color.html')
 

const server=http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(color);
});

server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`);
});
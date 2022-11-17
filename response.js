const http= require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('connet-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    
    res.end();
    
});

server.listen(3000);
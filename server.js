/*const http= require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();
});

server.listen(3000);*/


/*const http= require('http');
function rqlistner(req,res){
}
http.createServer(rqlistner);*/

/*const http= require('http');
const fs= require('fs');

const server = http.createServer((req,res)=>{
    const url= req.url;
    const method= req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    
        return res.end();
    }
    if(url === "/message" && method ==='POST'){
        fs.writeFileSync('Message.txt','arun');
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('connet-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    
    res.end();
    
});

server.listen(3000);*/

const http= require('http');
const fs= require('fs');


const server = http.createServer((req,res)=>{
    const url= req.url;
    const method= req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
    
        return res.end();
    }
    if(url === "/message" && method ==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedbody= Buffer.concat(body).toString();
            const message= parsedbody.split('=')[1];
            fs.writeFile('Message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        });   
    }
    res.setHeader('connet-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    
    res.end();
    
});

server.listen(3000);

/*const http= require('http');
const fs= require('fs');


const server = http.createServer((req,res)=>{
    const url= req.url;
    const method= req.method;
    if(url === '/'){
        fs.readFile("Message.txt",(err, data)=>{
            if(err){
                console.log(err);
            }
            console.log("data is "+data);
            res.write('<html>');
            res.write('<head><title>Message</title></head>');
            res.write(`<body> ${data} </body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
        
            return res.end();
        });
        
       
       
    }
    else if(url === "/message" && method ==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedbody= Buffer.concat(body).toString();
            const message= parsedbody.split('=')[1];
            fs.writeFile('Message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location', '/');
                //console.log(parsedbody);
                return res.end();
            });
            
        });   
    }
    else{
        res.setHeader('connet-type','text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    
    res.end();
    }
    
    
});

server.listen(3000);*/

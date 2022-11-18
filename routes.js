const http= require('http');

const routes =require("./routes");
console.log(routes.sometext);

const server = http.createServer(routes.handler);

server.listen(3000);

//---------------------------------------------------------------------------------------------------
const fs= require('fs');
const requesthandler = (req, res) =>{

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
};
/*module.exports = requesthandler;
module.exports.handler=requesthandler;
module.exports.sometext='some extra code';*/
module.exports={
    handler:requesthandler,
    sometext:'some extra code'
}




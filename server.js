const http= require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    console.log('arun');
});

server.listen(4000);


/*const http= require('http');
function rqlistner(req,res){
}
http.createServer(rqlistner);*/

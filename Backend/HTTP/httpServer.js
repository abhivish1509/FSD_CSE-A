const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('content-type',"application/json");
    res.end("<h1>welcome to the server</h1>");
})

server.listen(port,()=>{
    console.log("Server is running on port" + port);
})
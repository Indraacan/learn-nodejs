const http = require ('http');
const hostname = '127.0.0.1'; //disebut local host
const port = 3000 ;//port website biasa nya 80 atau 8080
//untuk menghundari bentrok website yang sudah memakai maka oakai port 3000

const server = http.createServer((request, response)=> {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hi im node js')
})
server.listen(port, hostname, ()=> {
    console.log(`server is running at ${hostname} : ${port}`);
    
})
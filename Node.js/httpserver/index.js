const http = require("http");

// to create server we need to use http.createServer() method includes 
// request and response parameter which supplied to Node.JS

//request object used to get information of http request
//e.g.url,request header, and data

//respose object can used to send response for a current
const server = http.createServer((req,res)=>{
    res.end('hello from the other side');

});

server.listen(8000,"localhost",()=>{
    console.log("listening to the port no 8000");
});

//after on the terminal nodemon index.js
//go to the chrom and write in searchbox localhost:8000
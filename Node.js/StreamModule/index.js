
// 1st method with out streaming old method..

// const fs = require("fs");
// const http = require("http");

// const server =http.createServer();

// server.on('request',(req,res)=>{
//     fs.readFile("input.txt","utf-8",(err,data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());

//     });
// });
// server.listen(8001,"localhost");

//2nd methos.

const fs = require("fs");
const http = require("http");

const server =http.createServer();

server.on('request',(req,res)=>{
//Reading from stream
//create readable stream
const rstream = fs.createReadStream("input.txt");
// handle stream events --> data,end,and error
rstream.on('data',(chunkdata)=>{
    res.write(chunkdata);
});
rstream.on('end',()=>{
    res.end();
})
rstream.on('error',(err)=>{
    console.log(err);
    res.end("file not found");
})
});
server.listen(8001,"localhost");
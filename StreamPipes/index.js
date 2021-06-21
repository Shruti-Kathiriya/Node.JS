const fs = require("fs");
const http = require("http");

// const server =http.createServer();

// //server.on('request',(req,res)=>{
// //Reading from stream
// //create readable stream
// const rstream = fs.createReadStream("input.txt");
// // handle stream events --> data,end,and error
// // rstream.on('data',(chunkdata)=>{
// //     res.write(chunkdata);
// // });
// // rstream.on('end',()=>{
// //     res.end();
// // })
// // rstream.on('error',(err)=>{
// //     console.log(err);
// //     res.end("file not found");
// // })
// });
const server =http.createServer();
server.on('request',(req,res)=>{
    const rstream = fs.createReadStream("input.txt");
    //rstream.pipe(destination write the data);;
    rstream.pipe(res);
});
server.listen(8002,"localhost");

const http = require("http");
const fs = require ("fs");
const server = http.createServer((req,res)=>{
    //provide url requested by user
    //console.log(req.url);
    // for call api only at first time.
    const data = fs.readFileSync("/home/shruti/Desktop/NodeJS/Node.JS/UserAPI/userapi.json","utf-8");
    const objData = JSON.parse(data);
    if (req.url =="/")
    {
        res.end('hello from the home side');
    }
    else if(req.url == "/about")
    {
        res.end('hello from the about side');
    }
    else if(req.url == "/contact us")
    {
        res.end('hello from the contact us side');
    }
    //part of create simple api in nodeJS from here we will call userapi 
    else if(req.url == "/userAPI")
    {   // using this it will call our api multiple tme foe call it only first time use sync fun and write it on top.
        // fs.readFile("/home/shruti/Desktop/NodeJS/Node.JS/UserAPI/userapi.json","utf-8",(err,data)=>{
        //     console.log(data);
        //     //res.end(data);
        //     // for only get the name of first
        //     const objData = JSON.parse(data);
        res.writeHead(200,{"content-type": "application/json"})
        res.end(objData[0].first_name)
            
    
        //res.end('hello from the USERAPI side');
        //it will give error so for that write it into readfile  res.end(data);
    }
    // section end .
    else
    {
        //STATUS 200 will be shown  ON INSPECT NETWORK which indicate successfull response to resolve that.
        //res.writeHead(404)
        //TO SPECIFIE THAT IT IS HTML TEXT NOT NORMAL TEXT
        res.writeHead(404,{"content-type":"text/html"});
        res.end('<H1>404 error page</H1>');
    }
});

server.listen(8000,"localhost",()=>{
    console.log("listening to the port no 8000");
});


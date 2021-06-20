const http = require("http");

const server = http.createServer((req,res)=>{
    //provide url requested by user
    //console.log(req.url);
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


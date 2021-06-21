const http = require ("http");
const fs =require("fs");
var requests = require('requests');
const { red } = require("color-name");
//setting valuessss..

const replaceval=(tempval,orgval)=>{
    let temperature = tempval.replace("{}%%tempval",orgval.main.temp)
    return temperature;
}

const homefile =fs.readFileSync("home.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=dc6ca57f1d210c0b20c8e1c165ea5310')
            .on('data', function (chunk) {
                const objdata=JSON.parse(chunk)
                const arrdata=[objdata]
                console.log(arrdata)
                const realtimedata =arrdata.map((val)=>{
                replaceval(homefile,val)
                
                })
                res.write(realtimedata)
            })
            .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);

            console.log('end');
            red.end();
            });
    }
});

server.listen(3001,"localhost");
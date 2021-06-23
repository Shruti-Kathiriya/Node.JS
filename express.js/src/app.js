//reates an Express application. The express() function is a top-level function exported by the 
//express module.


const express = require ("express");
const app = express();
//created express app..

//app.get(route,callback func)
//API methods { get=read,post=create,put=update,delete=del }

app.get("/",(req,res)=>{
    res.send("helllo world from the home page")
})

app.get("/about",(req,res)=>{
    res.send("helllo world from the about page")
})
//callback fun has 2 arg request and response 
// request object represent http request , has properities 
// request querystring,parameters,body,HTTP Headers

//response object represents http response that the 
//express app sends when it receives an http request.


//listen to the request.
app.listen(8000,()=>{
    console.log("listning to the port at 8000");
})

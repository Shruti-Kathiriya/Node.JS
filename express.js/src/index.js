const path = require("path")
const express = require ("express");
const app = express();
//created express app..

// //findout path of the folder where out html css are stored
// //--------------------------------------------------------
// // two types of path relative abd absolute.
// console.log(__dirname);
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js/src
// console.log(path.join(__dirname,'..'));
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js
// console.log(path.join(__dirname,'../public'));
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js/public

const staticPath=path.join(__dirname,'../public')

//built-in middleware 
app.use(express.static(staticPath))

//app.get(route,callback func)
//API methods { get=read,post=create,put=update,delete=del }

app.get("/",(req,res)=>{
    res.send("helllo world from the home page")
})

app.get("/about",(req,res)=>{
    res.send("helllo world from the about page")
})

//listen to the request.
app.listen(8008,()=>{
    console.log("listning to the port at 8000");
})
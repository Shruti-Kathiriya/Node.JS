const path = require("path")
const express = require ("express");
const app = express();
//created express app..
const hbs= require("hbs");

// //findout path of the folder where out html css are stored
// //--------------------------------------------------------
// // two types of path relative abd absolute.
// console.log(__dirname);
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js/src
// console.log(path.join(__dirname,'..'));
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js
// console.log(path.join(__dirname,'../public'));
// //OP /home/shruti/Desktop/NodeJS/Node.JS/express.js/public
app.set("view engine",".hbs");
//to set the view engine..

const templatePath=path.join(__dirname,"../templates/views")
//rename views folder to templates.
//app.set("views",templatePath)
app.set("views",templatePath)

const partialPath=path.join(__dirname,"../templates/partials")
// console.log(partialPath);
hbs.registerPartials(partialPath)

// const staticPath=path.join(__dirname,'../public')

//built-in middleware 
//app.use(express.static(staticPath))

//app.get(route,callback func)
//API methods { get=read,post=create,put=update,delete=del }

//tepmlate engine root
//if we will not mention it will execute this code helllo world from the home page
//we will see views/index because it follow top to bottom if we write helllo world from the home page
//first then it ill render on page
app.get ("/",(req,res)=>{
    res.render('index')
})
app.get("/",(req,res)=>{
    res.send("helllo world from the home page")
})
app.get("/about",(req,res)=>{
    res.render('about')
})
// app.get("/about",(req,res)=>{
//     res.send("helllo world from the about page")
// })
//if we find any error after aboutus page...

app.get("/about/*",(req,res)=>{
    res.render('404',{
        errorcomment : "OOPS ! - about as page page not found!!!!"
    })
})
// UNIVERSAL OPERATOR * EXPRESS WORKS TOP TO BOTTOM IF FROM ABOVE ANY ROOT WILL 
//NOT MATCHED THEN IT WILL RENDER 404 PAGE
app.get("*",(req,res)=>{
    res.render('404',{
        errorcomment : "OOPS ! -page not found!!!!"
    })
})
//listen to the request.
app.listen(8008,()=>{
    console.log("listning to the port at 8008");
})

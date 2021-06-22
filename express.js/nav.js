//routing 
//  /about -welcome to about us page
//  /contact -welcome to contact us page
//  /temprature -welcome to temprature page

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to the main page !!!!")
})
app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to the about page !!!!")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to the contact page !!!!")
})
app.get("/temprature",(req,res)=>{
    res.send("Welcome to the temprature page !!!!")
})
app.listen(8004,()=>{
    console.log("listening to the potn no 8004");
})
//routing 
//  /about -welcome to about us page
//  /contact -welcome to contact us page
//  /temprature -welcome to temprature page

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    //res.send("<h1>Welcome to the main page !!!!</h1>")
    //for multiple use res.write()
    res.write("<h1>Welcome to the main page !!!!</h1>");
    res.write("<h1> Shruti Kathiriya</h1>")
    //it will load infinitely to stop.
    res.send()
})
app.get("/about",(req,res)=>{
    res.status(200).send("Welcome to the about page !!!!")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to the contact page !!!!")
})
app.get("/temprature",(req,res)=>{
    //JSON Data
    //for one element.
    // res.send({
    //     id:1,
    //     name:"shruti"
    // })
    //for multiple
    // res.send([{
    //     id:1,
    //     name:"shruti"
    // },
    // {
    //     id:1,
    //     name:"shruti"
    // },{
    //     id:1,
    //     name:"shruti"
    // },
    // {
    //     id:1,
    //     name:"shruti"
    // }])

    //second method...
    res.json([{
        id:1,
        name:"shruti"
    },
    {
        id:1,
        name:"shruti"
    },{
        id:1,
        name:"shruti"
    },
    {
        id:1,
        name:"shruti"
    }])
})
app.listen(8008,()=>{
    console.log("listening to the potn no 8004");
})
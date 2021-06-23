const path = require("path")
const express = require ("express");
const app = express();
const hbs= require('hbs');
app.set('view engine', '.hbs');
// const templatePath=path.join(__dirname,"../templates/views")
// console.log(templatePath);
// app.set("views",templatePath);
const partialPath=path.join(__dirname,"../partials")
console.log(partialPath);
hbs.registerPartials(partialPath)
//hbs.registerPartial()
app.get ("/",(req,res)=>{
    res.render('index')
})
//listen to the request.
app.listen(8008,()=>{
    console.log("listning to the port at 8008");
})







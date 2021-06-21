const path = require("path");

// console.log(path.dirname("/home/shruti/Desktop/NodeJS/PathModule/path.js"));
// console.log(path.extname("/home/shruti/Desktop/NodeJS/PathModule/path.js"));
// console.log(path.basename("/home/shruti/Desktop/NodeJS/PathModule/path.js"));

//console.log(path.parse("/home/shruti/Desktop/NodeJS/PathModule/path.js"));
const mypath = path.parse("/home/shruti/Desktop/NodeJS/PathModule/path.js");
const {root,dir,base,ext,name}=mypath;
console.log(root);
console.log(name);
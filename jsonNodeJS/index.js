const fs = require ("fs");
const bioData = {
    name : "shruti",
    age : 22,
    channel : "thapa technical"
};

// console.log(bioDate.channel);
// console.log(bioDate.name);

//object to json conversion...

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// // OUTPUT : {"name":"shruti","age":22,"channel":"thapa technical"}

// //console.log(jsonData.channel);
// // Undefinned

// //conver json to object...
// const objData = JSON.parse(jsonData);
// console.log(objData);
// //OUTPUT :{ name: 'shruti', age: 22, channel: 'thapa technical' }

// 1: convert into JSON
// 2: add to another File.channel
// 3: readfile
// 4: again convert back to Object
// 5: show it on console.

const jsonBioData = JSON.stringify(bioData);

fs.writeFile("JSONData.json",jsonBioData,(err)=>{
    console.log(err);
});

fs.readFile("JSONData.json","utf-8",(err,data)=>{
   const orgData = JSON.parse(data);
   console.log(orgData);
})


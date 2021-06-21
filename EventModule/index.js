//Event Module.
// nodejs has a in=built module called "Events". 
//where you can create- ,fire-, and listen for- your own events.
// example -1 registering for the event to e fired only one time using once 

// example -2 create an event emitter instance and registre a couple of callback

// exapmle -3 registering for the event with callback parameters

//EventEmitter is class not a variable that's why its first letter is capital.


//object named as event  2 methods :)
//1st method.
//const event = require("events")
//const EventEmitter = new event.EventEmitter();

// 2nd method.
const EventEmitter=require ("events");
const event =new EventEmitter();

//Example 1 :

// always first define on and then emit othrwise it will not listen an event .

//event.on(eventname,function to perform) it is basically listener for are created event
// event.on("sayMyName",()=> {console.log("your name is shruti");})
// //created new event...
// event.emit("sayMyName")


//example 2 :
//multiple callbacks are possible .

event.on("sayMyName",()=> {console.log("your name is shruti");})
event.on("sayMyName",()=> {console.log("your name is Kathiriya");})
event.on("sayMyName",()=> {console.log("your name is xyz");})
event.emit("sayMyName")

//Example 3:
event.on("checkPage",(statuscode ,msg )=>{
    console.log(`status code is ${statuscode} and page is ${msg}`);

})
event.emit("checkPage",200,"ok");
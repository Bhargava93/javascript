
var firstname="bhargava";

//multiple values
var names=["bharagava","srikanth","dhana","guru"]; 

// irrespective of datatype any value we can store
var age= 10;

var names=["bharagava","srikanth","dhana","guru",10,20,]; 

var details=["bharagava","srikanth","dhana","guru",10,20,"hindupur","kadiri","tripati"]; 

// console.log(details.length-1)
// console.log(details[details.length-1]);

// console.log(details[0]);
// console.log(details[1]);
// console.log(details[2]);
// console.log(details[3]);


for(var i=0;i<details.length;i++){
 console.log(details[i]);
}






// Object

// key value pair

// var details_obj={key:value}

var details_obj={
    "name":"bhargava",
    "datails":{
        "education":"mca",
        "job":"sd2",
        "location":"bangalore",
        "company":{
            "comapnyname":"haapiest",
            "location":"bangalore"
        }
    },
    "family_details":{
        "fathername":"raja",
        "mothername":"tulasi"
    },
    
}


[{
    "name":"bhargava",
    "age":10,
    "town":"hindupur",
    "education":"mca"
},
{
    "name":"srikanth",
    "age":100,
    "town":"kadiri",
    "education":"mca"
},
{"name":"dhana",
"age":1000,
"town":"kadiri",
"education":"mca"
}]












// function funactionName(monday){

//     return;
// }

// funactionName();

// function printDaysOfWeek(week) {

//     // console.log("week=====",week);
//     const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     for (let i = 0; i < daysOfWeek.length; i++) {
//         // console.log(daysOfWeek[i]);

//         if(week.toLowerCase() === daysOfWeek[i].toLowerCase()){
//             return "today is "+daysOfWeek[i];
//         }

//     }
    
// }

// var result = printDaysOfWeek("MONDAY");

// console.log(result);
















// function printDaysOfWeek() {

//     const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     for (let i = 0; i < daysOfWeek.length; i++) {

//         console.log(daysOfWeek[i]);

//     }

// }

// printDaysOfWeek("to day is");


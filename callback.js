
// // function syntax 
// // without params
// function functionname(){
//     return;
// }

// functionname();

// // function with params
// function funcWithParams(name1,name2){

//     return name1+name2;
// }

// let fullname =funcWithParams("sunny","reddy");
// console.log(fullname);

// callback function
// function firstFun(callback){
//     console.log("firstFun====");
//     console.log(callback(thriedFun));
// }

// function secondFun(callback){
//     console.log("secondFun===");
//     console.log(callback());
// }

// function thriedFun(){
//     console.log("thriedFun===");
// }
// console.log(firstFun(secondFun));

// console.log(secondFun())



function firstFun(callback){
    callback()
}

function secondFun(callback){
callback();
}

function thriedFun(callback){
callback()
}



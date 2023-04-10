// function







// var result =i+j;
// var result =c+d;
// var result =a+b;

// console.log("resulst==",result);

// var multi_result= a*b;

// console.log("multiplication result== ",multi_result);

// // function declaration
// function addition(parameter1, parameter2, etc){
//     // logic
//     return ;

// }

// // function call
// addition();

var a = 10;
var b = 20;

var c = 20;
var d = 40;

var i = 10;
var j = 20;

function calculation(a, b, oparation) {
    console.log("oparation===", oparation);

    var addition_result;
    if (oparation === "add") {
        console.log("inside add block");
        addition_result = a + b;

    } else if (oparation === "sub") {
        console.log("inside sub block");
        addition_result = a - b;

    } else if (oparation === "mul") {
        console.log("inside mul block", a);

        addition_result = a * b;

    } else if (oparation == "no") {
        addition_result = "you havn't provide opration type"
    }

    // console.log("addition_result===",addition_result);

    return addition_result;
    // var firest_name="bhargava";
    // console.log(firest_name);


}

var result = calculation(a, b, "add");
var result1 = calculation(c, d, "sub");
var result2 = calculation(i, j, "mul");
var result3 = calculation(30, 40, "mul");
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);


// let 
// const

// block {}
// function {}
// global


// copy
// deep copy/ shallow copy

// var details_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log("details_array===",details_array);

// var numbers_array = details_array;

// numbers_array.push(10,11,12);
// console.log("numbers_array===",numbers_array);

// console.log("details_array===",details_array);

// ...  spread

// var deep_copy = [...details_array];

// console.log("deep_copy before====", deep_copy);

// deep_copy.push(20, 30, 40);
// console.log("deep_copy after====", deep_copy);


// var num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var num2_array = [11, 12, 13, 14, 115, 16, 17, 18, 19]
// var num3_array = [21, 22, 23, 24, 25, 26, 27, 28, 7]

// var result = [];
// result = result.concat(num_array, num2_array, num3_array);
// result.concat(num_array);
// for(let i=0;i<num_array.length;i++){
//     result.push(num_array[i]);
// }

// for(let i=0;i<num2_array.length;i++){
//     result.push(num2_array[i]);
// }

// for(let i=0;i<num3_array.length;i++){
//     result.push(num3_array[i]);
// }
// console.log("result===", result);

// result.push(100);
// console.log("num_array===",num_array);


// let sample = function (params1, params2, params3) {
//     console.log("=============", params1, params2, params3);
//     return;
// }

// let sample = function (...params) {
//     console.log("=============", params);
//     let [num1,num2,num3]=params
//     console.log("num1===",num1);
//     console.log("num2===",num2);
//     console.log("num3===",num3);
//     return;
// }

// sample(1, 2, 3);

// spread ...variablename
// rest  ...restoparator



// let numbers = function (number, ...details) {


//     console.log("number===", number)
//     console.log("name=====", name);
//     console.log("details===", details);
//     // console.log("b====", b);
//     // console.log("c====", c);
//     // console.log("d===", d);
//     // console.log("e===", e);
//     // console.log("f=====", f);
//     // console.log("sample===", callback);

//     return;

// }

// let sample = function () {
//     console.log("sample function");
// }
// numbers(1, "srikanth", 100, true, { "name": "bhargava" }, [1, 2, 3, 4, 5, 6], sample);

// Use rest to enclose the rest of specific user-supplied values into an array:
// function myBio(firstName, lastName, ...otherInfo) { 

//     return otherInfo;
// }

// Invoke myBio function while passing five arguments to its parameters:
//   myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

//   console.log("values====",values);
// The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]

// function myFunction(...a) {
// console.log(a, b, c);
// }

// const args = [1, 2, 3];

// myFunction(...args);

// const myName = ["Sofela", "is", "my"];

// const aboutMe = ["Oluwatobi",  "name.", ...myName];

// console.log(aboutMe);

// let myname="Sofela";

// console.log([...myname]);

// function myFunction(...a) {
//     let [first] = a;
//     console.log(a)
//     console.log("first===", first);
//     // console.log("second===", second);
//     // console.log("thread===", thread);
// }



myFunction(1, 2, 3);
// map
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array.reverse());

// multiply last element in the array with 100 remeaning elements 
// should multiply with 2 only

// let result_array = [];

// for (let i = 0; i < array.length; i++) {

//     if (i == array.length - 1) {
//         result_array.push(array[i] * 100);
//     }else{
//         result_array.push(array[i] * 2);
//     }

// }

// console.log(result_array);

// map
// note: it will push result into new array

// let result_array = array.map(function (element, index) {

//     if(index === array.length-1){
//         return element * 100;
//     }else{
//         return element * 2;
//     }

// });


// let result_array = array.map(function (element, index) {

//     if(index === array.length-1){
//         return element * 100;
//     }else{
//         return element * 2;
//     }

// });
// console.log("result_array===",result_array)

// forEach
// note: it won't create new array

// array.forEach(function (element) {
//     console.log(element);
//     return element * 2;
// });
// console.log("result_array===", result_array)

// filter

// let result_array=array.filter(function (element,index) {
//     // console.log("element===", element%2===0);
//     if(element%2===0){
//         // console.log(element);
//         return element;
//     }

// });

// console.log(result_array);


// let numbers = [10, 15, 2, 6, 4, 100, 1000, 99, 66, 44];

// result:[2,4,6,10,15,44,64,66,99,100,1000]


// let ascending= numbers.sort(function(a,b){
//     return a-b;
// });

// console.log(ascending[0]);
// console.log(ascending[ascending.length-1]);

// let numbers = [30, 4, 7, 1, 6, 9, 5, 8, 2, 111, 100, 20];

// let ascending = numbers.sort();

// console.log(ascending);





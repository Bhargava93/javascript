// console.log("persion 1");
// console.log("persion 2");

// setTimeout(()=>{
//     console.log("persion 3");
// },3000);

// console.log("persion 4");

// o/p:
// persion 1
// persion 2
// persion 4

// let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,110]

// for (var i = 0; i <= array.length; i++) {
//     // console.log(array[i]);

//     setTimeout(
//         () => {
//         console.log(array1[i]);
//         }
//     )
// }

// console.log(i);


var array = [10, 20, 30, 40, 50]
for(var i = 0; i < array.length; i++) {
//   delay(i)
console.log(delay(i));

}
function delay(i) {
  setTimeout(() => {
    // return array[i];
    console.log(array[i])
  }, 3000);

}

// console.log(delay());



// pending/suspend
// fullfilled/resolve
// failure/rejected

// let first_promises = new Promise((resolve, rejected) => {
//     let result = "success";
//     if (result === "success1") {
//         resolve("problem solved")
//     } else {
//         rejected("problem still exists");
//     }
// }).then((response) => {
//     console.log("response====", response);
// }).catch((error) => {
//     console.log("error====", error);

// })

// .then()
// .catch()


// console.log(first_promises);

// let new_promises = new Promise((res, rej) => { })
// console.log(newpromises)

// let new_promises = new Promise((res, rej) => {
//     let result = "success";
//     if (result === "success1") {
//         res("problem solved")
//     } else {
//         rej("problem still exists");
//     }
// });
// new_promises.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });


let samplePromises = (number) => {
    // return number;
    return new Promise((resolve, rejected) => {
        let result = 5;
        if (result === number) {
            resolve(result)
        } else {
            rejected("condition fail")
        }
    });
}

// let secondpromise=()=>{
//     return new Promise((resolve, rejected) => {
//         let result = 5;
//         if (result === number) {
//             resolve(result)
//         } else {
//             rejected("condition fail")
//         }
//     });
// }

// samplePromises(5)
//     .then(() => {

//     })
//     .then(() => {
        
//     })
//     .catch((error) => {
//         console.log(error);
//     })


module.exports={
    samplePromises
}
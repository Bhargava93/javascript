// async = makes function as promises
// await

// let samplepromises = new Promise((resolve, reject) => {
//     if (false) {
//         resolve("success");
//     } else {
//         reject("failure")
//     }
// });

// console.log(samplepromises);

// samplepromises.then((response)=>{
// return response;
// // console.log(response);
// }).then((data)=>{
// console.log("data===",data);
// })
// .catch((error)=>{
//     console.log("error====",error);
// })
// console.log(samplepromises);

let asyncFun1 = async function (number) {
    try {
        // throw error;
        return number;
    } catch (error) {
        console.log("error==async=", error);
    }
}

let addtion = async function (number) {
    try {
        console.log(number);
        // throw error;
       
            return number + 10;
       
    } catch (error) {
        console.log("error==addtion=", error);
    }
}

let multiplication = async function (number) {
    try {
        // throw error;
        return number * 10;
    } catch (error) {
        console.log("error==addtion=", error);
    }
}

// console.log(await asyncFun(5));

let result = async function (number) {

    let result = await asyncFun1(number);
    let result_addtion;
        setTimeout(async ()=>{
             result_addtion = await addtion(result);
             console.log("additon====",result_addtion);
        },5000)
    
        setTimeout(async ()=>{
            let result_multiplication = await multiplication(result_addtion);
            console.log(result_multiplication);
        },10000)


    
}
result(5)
// asyncFun(5).then((response) => {
//     console.log("async res====", response);
// }).catch((error) => {
//     console.log("error===", error);
// })

// asyncFun(5);
// console.log(asyncFun(5));
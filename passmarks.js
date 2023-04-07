// 35
var first_class = 36;
var second_class = 36;
var thrd_class = 35;

// if (first_class > 35) {
//     console.log("1st pass");
// } else if (second_class > 35) {
//     console.log("2nd pass");
// } else if (thrd_class > 35) {
//     console.log("3rd pass");
// } else {
//     console.log(" fail");
// }

if (first_class > 35) {
    console.log("1st pass");
    if(second_class > 35){
        console.log("2nd pass");
        if(thrd_class > 35){
            console.log("3rd pass");
        }else{
            console.log("3rd fail");
        }
    }else{
        console.log("2nd fail");
    }
} else {
    console.log("1st fail");
}
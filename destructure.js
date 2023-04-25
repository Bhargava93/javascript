// let first_name="bhargava";
// let collage="jntu";
// let company="happiestminds";

// let array=[];
// let obj={}

// let first_name = "bhargava", collage="jntu",company= "happiestminds";

// let first_name, collage, company;

// let first_name = collage = company = 10;

// console.log("first_name===",first_name);
// console.log("collage===",collage);
// console.log("company===",company);

// let deatils = ["bhargava", "jntu", "happiestminds", "bangalore"];
// // console.log("details===",deatils);

// // array destructing
// let [name, collage, ...reaming_values] = ["bhargava", "jntu", "happiestminds", "bangalore"];

// // console.log("name===", name);
// console.log("reaming_values===", reaming_values);
// // console.log("company===", company);

//  let [company, city]=reaming_values;
// console.log("city===", city);
// console.log("company===",company);

// let sample = function(...details){
//     console.log("details===",details);
//     // let [name,collage]=details;

//     let name = details[0];
//     let collage=details[1];

//     console.log("name===",name);
//     console.log("collage===",collage);

//     return;
// }

// sample("bhargava","jntu","hindupur","happiest");


// object
// Key, value

let deatils_obj = {
    "name": "bhargava",
    "collage": "jntu",
    "company": "happiestminds",
    "city_of": "bangalore"
};


// console.log("name===", deatils_obj.name);
// console.log("name===", deatils_obj["name"]);

// let { name,  company, ...obj}=deatils_obj;

// console.log(name);
// console.log("obj==",obj);
// console.log(company);
// console.log(city_of);

let sample = function({name, collage,...obj}){
console.log(name, collage, obj);
return obj;
}
// sample(deatils_obj);

module.exports=sample;


// premitive 
// 7 types: string , num, boolean,null , undefined ,symbol , BigInt , 

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null 
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 2333334567654345678765432345676543234567654n
// console.log(bigNumber)
// JavaScript is a dynamically typed language,
// reference type ( Non premitive)

// Array , Objects , Functions // function output object hota hai 
// const heros = ['shaktiman','naaraj', 'King' ]
//  let myObj = {
//     name: "Banti",
//     age: 22,
// }

// const myFunction=function(){
//     console.log("Hello world");
// }
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Premitive), Heap (Non-Premitive) memory

// let myYoutubename = "BantiPrasadSahoo"

// let anothername = myYoutubename
// anothername = "ABCDEF"
// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user2004@gmail",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "Banti@google.com"

console.log(userOne.email);
console.log(userTwo.email);

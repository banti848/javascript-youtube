const score = 4000
// console.log(score);

const balance = new Number(100.22);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const otherNumber = 23.456
// console.log(otherNumber.toPrecision(3))
// const otherNumber = 123.456
// console.log(otherNumber.toPrecision(3))
// const otherNumber = 1123.456
// console.log(otherNumber.toPrecision(4))

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-In'))


// ++++++++++++++++++++++\\*MATH*//++++++++++++++++++//


console.log(Math);
// console.log(Math.abs(-4)); //absoulte value
// console.log(Math.round(43.3));
// console.log(Math.ceil(43.2));
// console.log(Math.floor(43.9));
// console.log(Math.min(43,2,4,55,566,78));
// console.log(Math.max(23,45,2,9,222,2,1,56789,999));
console.log(Math.random());// 0 to 1 value show heba
console.log((Math.random()*19 )+ 22);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20 
  
console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random()*(max - min + 1)))
console.log(Math.floor(Math.random()*(max - min + 1)) + min )
console.log(Math.floor(Math.random()*(max - min + 1)) + max )
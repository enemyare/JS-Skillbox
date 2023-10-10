let a = 13.890123;
let b = 2.891564;
let precision = 2;

let aNormalized = Math.floor((a % 1) * Math.pow(10, precision));
let bNormalized = Math.floor((b % 1) * Math.pow(10, precision));
console.log(aNormalized);
console.log(bNormalized);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);

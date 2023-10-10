let n = -3;
let m = -10;
let count = 42;

let array = [];

for (let i = 0; i < count; i++) {
  let range = Math.abs(m - n) + 1;
  let rndNumber = Math.floor(Math.random() * range) + Math.min(m, n);
  array.push(rndNumber);
}

console.log(array);

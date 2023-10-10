let n = -3;
let m = -10;

function funcRandom(n, m) {
  let range = Math.abs(m - n);
  let numberInRange = Math.round(Math.random() * range);
  let min = Math.min(n, m);
  return numberInRange + min;
}

console.log(funcRandom(n, m));
console.log(funcRandom(n, m));

console.log(funcRandom(n, m) > funcRandom(n, m));
console.log(funcRandom(n, m) < funcRandom(n, m));
console.log(funcRandom(n, m) >= funcRandom(n, m));
console.log(funcRandom(n, m) <= funcRandom(n, m));
console.log(funcRandom(n, m) === funcRandom(n, m));
console.log(funcRandom(n, m) !== funcRandom(n, m));

let count = 3;
let array = [];

for (let i = 1; i < count + 1; i++) {
  array.push(i);
}

for (let i = 0; i < array.length; i++) {
  let tmp = array[i];
  let rndm = Math.floor(Math.random() * count);
  array[i] = array[rndm];
  array[rndm] = tmp;
}

console.log(array);

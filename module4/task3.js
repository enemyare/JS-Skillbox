let count = 7;
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

let n = 1;
let index = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === n) {
    index = i;
    break;
  }
}
if (index > -1) {
  console.log(index);
} else {
  console.log("элемент не найден");
}

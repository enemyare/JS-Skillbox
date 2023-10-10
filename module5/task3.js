let someArr = [10, 5, 6, 2, 8, 1, 9, 4, 3, 7];

let arrSort = function (someArray) {
  for (let i = 0; i < someArray.length; i++) {
    for (let j = i + 1; j < someArray.length; j++) {
      if (someArray[i] > someArray[j]) {
        let temp = someArray[i];
        someArray[i] = someArray[j];
        someArray[j] = temp;
      }
    }
  }
  return someArray;
};

console.log(arrSort(someArr));

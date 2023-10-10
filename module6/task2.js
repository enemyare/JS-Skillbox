let allUsers = [
  { name: "Валя", age: 11 },
  { name: "Таня", age: 24 },
  { name: "Рома", age: 21 },
  { name: "Надя", age: 34 },
  { name: "Антон", age: 7 },
];

let getOlderUser = function (allUsers) {
  let maxAge = -1;
  let older = "";
  for (user of allUsers) {
    if (user.age > maxAge) {
      maxAge = user.age;
      older = user.name;
    } else {
      maxAge = maxAge;
      older = older;
    }
  }
  return older;
};
console.log(getOlderUser(allUsers));

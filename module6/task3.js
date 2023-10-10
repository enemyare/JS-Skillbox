let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];

let filter = function (objects, key, value) {
  let newObjects = [];
  for (user of objects) {
    if (user[key] === value) {
      newObjects.push(user);
    }
  }

  return newObjects;
};

let result = filter(objects, "name", "Иван");
console.log(result);

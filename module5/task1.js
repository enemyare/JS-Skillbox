let getAge = function (dateOfBirthday) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear - dateOfBirthday - 1;
};

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));

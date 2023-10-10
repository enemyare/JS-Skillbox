let whiteList = [
  "my-email@gmail.ru",
  "jsfunc@mail.ru",
  "annavkmail@vk.ru",
  "fullname@skill.ru",
  "goodday@day.ru",
];
let blackList = ["jsfunc@mail.ru", "goodday@day.ru"];

let filter = function (whitelist, blacklist) {
  newWhiteList = [];

  for (let i = 0; i < whiteList.length; i++) {
    if (!blackList.includes(whiteList[i])) {
      newWhiteList.push(whiteList[i]);
    }
  }
  return newWhiteList;
};

let result = filter(whiteList, blackList);
console.log(result);

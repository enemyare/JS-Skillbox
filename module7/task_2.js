let studentObj = {
  name: "Игорь",
  age: 17,
};

function createStudentCard(studentObj) {
  let div = document.createElement("div");
  let body = document.body;
  body.appendChild(div);

  let h2 = document.createElement("h2");
  h2.textContent = `${studentObj.name}`;
  div.appendChild(h2);

  let span = document.createElement("span");
  span.textContent = `Возраст: ${studentObj.age} лет`;
  div.append(span);
}

let result = createStudentCard(studentObj);
console.log(result);

function createStudentCard(name, age) {
  let div = document.createElement("div");
  let body = document.body;
  body.appendChild(div);

  let h2 = document.createElement("h2");
  h2.textContent = `${name}`;
  div.appendChild(h2);

  let span = document.createElement("span");
  span.textContent = `Возраст: ${age} лет`;
  div.append(span);
}

let result = createStudentCard("Игорь", 17);
console.log(result);

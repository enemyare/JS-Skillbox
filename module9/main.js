// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
    let arrayOfNumber = [];
    for (let i = 1; i < count + 1; i++) {
        arrayOfNumber.push(i);
        arrayOfNumber.push(i);
    }
    return arrayOfNumber;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
function startGame(count) {
    let firstCard = null;
    let secondCard = null;
    const arrayShuffleNumber = shuffle(createNumbersArray(count));

    for (const cardNumber of arrayShuffleNumber) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = cardNumber;
        game.append(card); 
        card.addEventListener("click", () => {
            if (
                card.classList.contains("open") ||
                card.classList.contains("success")
            ) {
                return;
            }

            if (firstCard !== null && secondCard !== null) {
                firstCard.classList.remove("open");
                secondCard.classList.remove("open");
                firstCard = null;
                secondCard = null;
            }

            card.classList.add("open");
            if (firstCard === null) {
                firstCard = card;
            } else {
                secondCard = card;
            }

            if (firstCard !== null && secondCard !== null) {
                let firstCardNumber = firstCard.textContent;
                let secondCardNumber = secondCard.textContent;
                if (firstCardNumber === secondCardNumber) {
                    firstCard.classList.add("success");
                    secondCard.classList.add("success");
                }
            }

            if (
                arrayShuffleNumber.length ===
                document.querySelectorAll(".success").length
            ) {
                setTimeout(() => {
					game.innerHTML = ''
                    alert("ПОБЕДА!!!");
					let countCard = Number(prompt("Введите кол-во пар", 4));
					startGame(countCard)
                }, 400);
            }
        });
    }
}

let countCard = Number(prompt("Введите кол-во пар", 4));
startGame(countCard);

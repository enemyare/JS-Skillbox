let userName = "михаил"
let userSurname = "Султанов"

let changeName = userName.substring(0,1).toUpperCase() + userName.substring(1).toLowerCase()
let changeSurname = userSurname.substring(0,1).toUpperCase() + userSurname.substring(1).toLowerCase()

console.log(changeName)
console.log(changeSurname)

if (userName === changeName && userSurname === changeSurname){
    console.log('Имя осталось без изменений')
}
else{
    console.log('Имя было преобразовано')
}
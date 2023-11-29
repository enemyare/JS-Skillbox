const studentsList = [
    {
        name: "Иван",
        surname: "Иванович",
        lastname: "Прачкин",
        dateOfBirth: "11.01.1999 (24 года)",
        startStudydate: "2021-2025 (3 курс)",
        faculty: "Информатики",
    },
    {
        name: "Анатолий",
        surname: "Сергеевич",
        lastname: "Клуша",
        dateOfBirth: "26.05.1992 (31 год)",
        startStudydate: "2020-2024 (4 курс)",
        faculty: "Лингвистики",
    },
    {
        name: "Александр",
        surname: "Анатольевич",
        lastname: "Штиль",
        dateOfBirth: "25.03.1998 (25 лет)",
        startStudydate: "2023-2027 (1 курс)",
        faculty: "Физики",
    },
    {
        name: "Егор",
        surname: "Алексеевич",
        lastname: "Прохоров",
        dateOfBirth: "27.09.1990 (33 года)",
        startStudydate: "2015-2019 (закончил)",
        faculty: "Информатики",
    },
    {
        name: "Алиса",
        surname: "Сергеевна",
        lastname: "Злючкина",
        dateOfBirth: "01.01.2003 (20 лет)",
        startStudydate: "2021-2025 (3 курс)",
        faculty: "Информатики",
    },
];

const optionsData = {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	timezone: 'UTC'
};

let sortFlag ='fio'

//DOM-дерево
const $app = document.getElementById("app"),
    $addForm = document.getElementById("add-form"),
    $nameInp = document.getElementById("add-form__name-inp"),
    $surnameInp = document.getElementById("add-form__surname-inp"),
    $lastnameInp = document.getElementById("add-form__lastname-inp"),
    $dateOfBirthInp = document.getElementById("add-form__dateofbirth-inp"),
    $startStudyInp = document.getElementById("add-form__startstudy-inp"),
    $facultyInp = document.getElementById("add-form__faculty-inp"),

    $filterForm = document.getElementById("filter-form"),
    $filterFio = document.getElementById("fio-inp"),
    $filterDateOfBirth = document.getElementById("dateofbirth-inp"),
    $filterStartStudy = document.getElementById("startsstudy-inp"),
    $filterFaculty = document.getElementById("faculty-inp"),

    $table = document.createElement("table"),
    $tableHead = document.createElement("tHead"),
    $tableBody = document.createElement("tBody"),
    
    $tableHeadtr = document.createElement("tr"),
    $tableHeadthFIO = document.createElement("th"),
    $tableHeadthStartStudy = document.createElement("th"),
    $tableHeadthBirthYear = document.createElement("th"),
    $tableHeadthFaculty = document.createElement("th");



$table.classList.add("table", "table-bordered");

$tableHeadthFIO.textContent = "ФИО";
$tableHeadthBirthYear.textContent = "Дата рождения";
$tableHeadthStartStudy.textContent = "Годы обучения";
$tableHeadthFaculty.textContent = "Факультет";

$tableHeadthFIO.style = "cursor: pointer";
$tableHeadthBirthYear.style = "cursor: pointer";
$tableHeadthStartStudy.style = "cursor: pointer";
$tableHeadthFaculty.style = "cursor: pointer";

$tableHeadthFIO


$tableHeadtr.append($tableHeadthFIO);
$tableHeadtr.append($tableHeadthFaculty);
$tableHeadtr.append($tableHeadthBirthYear);
$tableHeadtr.append($tableHeadthStartStudy);

$tableHead.append($tableHeadtr);
$table.append($tableHead);
$table.append($tableBody);
$app.append($table);

//создание одного студента 
function getStudent(OneUser) {
    const $Usertr = document.createElement("tr"),
        $UserFIO = document.createElement("th"),
        $UserStartStudy = document.createElement("th"),
        $UserBirthYear = document.createElement("th"),
        $UserFaculty = document.createElement("th");

    $UserFIO.textContent = OneUser.fio;
    $UserBirthYear.textContent = OneUser.dateOfBirth;
    $UserStartStudy.textContent = OneUser.startStudydate;
    $UserFaculty.textContent = OneUser.faculty;

    $Usertr.append($UserFIO);
    $Usertr.append($UserFaculty);
    $Usertr.append($UserBirthYear);
    $Usertr.append($UserStartStudy);
    return $Usertr
}

// Рендер таблицы и вывод всех студентов
function renderStudentsTable(studentsArray) {
    $tableBody.innerHTML = ''
    let copyListData = [...studentsArray];

    for (const oneUser of copyListData) {
        oneUser.fio = oneUser.name + " " + oneUser.surname + " " + oneUser.lastname;
    }
    //Сортировка
    copyListData = copyListData.sort(function(a,b){
        if(a[sortFlag] < b[sortFlag]) return -1
    })

    // фильтрация
    if ($filterFio.value.trim()!=="")
    copyListData = copyListData.filter(function(oneUser) {
        if(oneUser.fio.includes($filterFio.value.trim())) return true
      })
    if ($filterStartStudy.value!=="")
    copyListData = copyListData.filter(function(oneUser) {
        if(String(oneUser.startStudydate).includes($filterStartStudy.value)) return true
      })
    if ($filterFaculty.value.trim()!=="")
    copyListData = copyListData.filter(function(oneUser) {
        if(oneUser.faculty.includes($filterFaculty.value.trim())) return true
      })

    // отрисовка
    for (const OneUser of copyListData) {
        const $newTr = getStudent(OneUser)
        $tableBody.append($newTr);
    }
}

renderStudentsTable(studentsList);


// форма для создания нового объекта
$addForm.addEventListener('submit', function(event){
    event.preventDefault()
    const nowDate = new Date()
    if ($nameInp.value.trim()==""){
        alert('Введите имя!')
        return
    }
    if ($surnameInp.value.trim()==""){
        alert('Введите фамилию!')
        return
    }
    if ($dateOfBirthInp.value==""){
        alert('Дата рождения не заполнена')
        return
    }
    if(parseInt($dateOfBirthInp.value.slice(0, 4))<1900){
        alert('Дата рождения должна находится в диапозоне с 1900 года до текущего года')
        return
    }
    if ($startStudyInp.value.trim()==""){
        alert('Дата начала обучения не заполена')
        return
    }

    if (Number($startStudyInp.value.trim())<2000 || Number($startStudyInp.value.trim()) > nowDate.getFullYear()){
        alert('Дата начала обучения должна находится в диапазоне от 2000-го до текущего года')
        return
    }

 
    if ($facultyInp.value.trim()==""){
        alert('Введите факультет')
        return
    }
    
    studentsList.push({
        name: $nameInp.value.trim(),
        surname: $surnameInp.value.trim(),
        lastname: $lastnameInp.value.trim(),
        dateOfBirth: new Date($dateOfBirthInp.value).toLocaleDateString("ru", optionsData) + ' (' + (nowDate.getFullYear()-$dateOfBirthInp.value.slice(0, 4) + 'лет)'),
        startStudydate: parseInt($startStudyInp.value.trim()) +'-'+ (Number($startStudyInp.value.trim())+4)+ ' (' + (nowDate.getFullYear()-Number($startStudyInp.value)+1) +' курс)',
        faculty: $facultyInp.value.trim(),
    })
    
    $nameInp.value=''
    $surnameInp.value=''
    $lastnameInp.value=''
    $dateOfBirthInp.value=''
    $startStudyInp.value=''
    $facultyInp.value=''

    renderStudentsTable(studentsList);
    
})
 

$tableHeadthFIO.addEventListener('click',function(){
    sortFlag = 'fio'
    renderStudentsTable(studentsList)
}) 
$tableHeadthBirthYear.addEventListener('click',function(){
    sortFlag = 'dateOfBirth'
    renderStudentsTable(studentsList)
})  
$tableHeadthStartStudy.addEventListener('click',function(){
    sortFlag = 'startStudydate'
    renderStudentsTable(studentsList)
})  
$tableHeadthFaculty.addEventListener('click',function(){
    sortFlag = 'faculty'
    renderStudentsTable(studentsList)
})  


$filterForm.addEventListener("submit", function(event){
    event.preventDefault()
})
$filterFio.addEventListener("input", function(){
    renderStudentsTable(studentsList)
})
$filterStartStudy.addEventListener("input", function(){
    renderStudentsTable(studentsList)    
})
$filterFaculty.addEventListener("input", function(){
    renderStudentsTable(studentsList)
})
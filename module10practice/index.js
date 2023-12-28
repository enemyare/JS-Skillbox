parseEmployyesData(`
Тиунов Тимофей  Сергеевич,  Системный архиктектор
Иванов Иван Иванович , frontend-разработчик
`)

function parseEmployyesData(dataString){
    return dataString
        .split('/n')

        .filter(line => line.trim().length > 0)

        .map(line => {
            const [fullname, occupation] = line
                .split(',')
                .map(str => str.trim())
                .filter(text => text.length>0)
            
            const [surname, name, middlename] = fullname
                .split(' ')
                .filter(text => text.length > 0)
            return {
                surname, name, middlename, occupation
            }
        })

}
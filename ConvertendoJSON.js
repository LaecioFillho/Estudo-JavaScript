//JSON - JavaScript Object Notation
//JSON.stringify()
//JSON.parse()

const people = [{
    id: 1,
    name: "Laecio",
    lasName: "Filho",
    bornDate: new Date(1989, 1, 13),
    address: {
        city: "Juazeiro do Norte",
        road: "Rua Projetada 17",
    }
}]

console.log(JSON.stringify(people)) //Conversão Obj -> String

const json = '[{"id":1,"name":"Laecio","lasName":"Filho","bornDate":"1989-02-13T03:00:00.000Z","address":{"city":"Juazeiro do Norte","road":"Rua Projetada 17",}}]'

console.log(JSON.parse(json)) //Conversão de String p/ Obj.
let numbers = [1, 10, 18, 15]

let res = numbers.filter((item) => item > 10) //Filtrar só os numeros maiores que 10

console.log(res)
console.log("")

//Função Map

let people = [
    {name: "Laecio", age: 23},
    {name: "myLena", age: 24},
    {name: "JUNior", age: 28}
]

const peopleC = people.map((item) => item.name.toUpperCase())

console.log(peopleC)
console.log("")

const peopleAlt = people.map((item) => item.name = "Pedro")

console.log(peopleAlt)
console.log("")
 
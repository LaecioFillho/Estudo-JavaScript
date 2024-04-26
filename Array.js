let people = ["Laecio", "Pedro", "Junior"]

//Retornar só alguns
console.log(people.slice(1))//Retorna do elemento 1 em diante
console.log(people.slice(1, 2))
console.log("")

//Adicionar novos elementos
people.push("Zé")// ADD no Final do Array
people.unshift("Mylena")// ADD no Inicio do Array
console.log(people)
console.log("")

//Remover elementos
people.pop()// Remove elementos do Final E Tambem retorna o elemento Removido.
people.shift()// Remove elementos do Inicio
console.log(people)
console.log("")

//Localizando elementos
let index = people.indexOf("Laécio")
console.log(index)
console.log("")

//Concatenação

let number = [1,2,3,4]
let number2 = [5,6,7,8]

console.log(number.concat(number2))
console.log("")

//Desestruturação de codigo

let nums = [1,2,3,4,5,6]

let [n1, n2] = num

console.log("n1", n1)
console.log("n2", n2)
console.log("")

function myFunction(){
    const x = 10
    const y = 400

    return [x, y]
}

console.log("x", x)
console.log("y", y)
console.log("")
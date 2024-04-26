//Conversão de Numero para String

console.log(typeof Number ("2"))
console.log(typeof String (2))
console.log(Number ("a")) //NaN
console.log(Number (true))
console.log("")

//Conversão de String e Numbers para Booleanos

console.log(Boolean(""))
console.log(Boolean("abc"))
console.log(Boolean("0"))
console.log(Boolean("1"))

console.log(Number(true))
console.log(Number(false))

console.log(String(true))
console.log(String(false))
console.log("")

//Conversão de Data
//Data -> Formato ISO: mm/dd/yyyy ou yyyy-mm-dd

console.log(new Date())
console.log(new Date("04/09/2024"))
console.log(new Date("2024-04-09"))
console.log(new Date().toString)
console.log(new Date().toISOString)

//String e Array

let user = "Felipe Fontoura"

console.log(user)
console.log(user[0])
console.log(user.length)

for (const i of user){
    console.log(i)
}
console.log(" ")

let values = [1,2,3,4,5,6,7,8]

console.log(values.join(" ")) //para juntar o array
console.log(user.split(",")) //Para Separar a String

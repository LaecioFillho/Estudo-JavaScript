//Arredondamento Monetario"

//toFixed() //Quantidade de casa após a vírgula, e arredonda automaticamente!!!
//Math.ceil() //Arredonda para Cima, excluindo as Vírgulas!!1
//Math.floor() //Arredonda para Baixo, excluindo as Vírgulas!!1
//Math.round() //Igual ao Floor!!!
//new Intl.NumberFormat().format() //Para converter o valor em moeda!!!

let value = 1234.456

console.log(value.toFixed(2))
console.log(Math.ceil(value))
console.log(Math.floor(value))
console.log(Math.round(value))
console.lognewIntl.NumberFormat(("pt-BR", {style: "currency", currency: "BRL"}).format(value))
console.log(" ")

//Contagem de digítos em um valor declarado em uma variave"

let num = 123456789

console.log(String(num).length) //É só transformar para String.
console.log(" ")

//Separando Strings"

let frase = "Eu sou um cara muito Legal"

console.log(frase.split(" ").join("-"))
console.log("")

//Maiusculo e Mínusculo"

console.log( frase.toLowerCase()) //Transforma toda a String em Mínusculo
console.log( frase.toUpperCase()) //Transforma toda a String em Maiusculo
console.log("FeLipe".toUpperCase()) //Niverlar tudo Maiusculo para o Banco de Dados!!!
console.log("")


//Encontrar Strings

let frase2 = "Eu sou um cara legal"

console.log(frase2.toLowerCase().includes("eu"))

//Substituindo Strings

console.log(frase2.replace("Eu sou", "Laécio é"))
console.log(value.toFixed(2).replace(".", ",")) //Sem a API Intl
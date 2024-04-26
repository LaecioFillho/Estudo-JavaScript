//Retorna um elemento com um determinado ID
const nomeUm = document.getElementById('l1')
console.log(nomeUm)

//Retorna varios elementos com um determinado nome de TAG
const nomes = document.getElementsByTagName('div')
console.log(nomes)

//Retorna varios elementos com uma deteminada CLASSE
const nomesDois = document.getElementsByClassName('l4')
console.log(nomesDois)

//Retornar um elemento escolhido
const teste1 = document.querySelector('#p2')
console.log(teste1)

//Retorna varios elementos escolhidos 
const teste2 = document.querySelectorAll('.l4')
console.log(teste2)

const arra = {n1,n2,n3}

for (let i = 0; i < teste2.length; i++) {
    arra[i] = teste2
    console.log(arra[i])   
}
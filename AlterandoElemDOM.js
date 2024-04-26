const alterandoNome = document.querySelector('.l4')

const novoName = alterandoNome.innerHTML = 'Laécio'
alterandoNome.style.color = 'red'
console.log(novoName)

//Criando TAGs Elementos por JavaScript
const title = document.createElement('h1')
title.innerHTML = 'Nomes Pessoais'

document.body.append(title)
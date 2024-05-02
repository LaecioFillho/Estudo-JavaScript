//Keydown mapea as teclas acionadas

const elementoInput = document.querySelector('input[type=text]')

elementoInput.addEventListener("keydown", (event) => {
    console.log("Event", `${event.key} - ${event.keyCode}`)
})

 
import { popup } from "./popup.js"

const errorPopup = document.querySelector(".error-popup")
const form = document.querySelector("form")


function errorMessage(message) {
    errorPopup.innerHTML = message
    errorPopup.classList.remove('hide')
    setTimeout(() => {
        errorPopup.classList.add('hide')
    }, 2000)
}

form.onsubmit = event => {
    console.log("submit")
    event.preventDefault()
    let weight = Number(document.querySelector("#weight").value)
    let height = Number(document.querySelector("#height").value)

    if (isNaN(Number(weight)) || isNaN(Number(height))) {
        errorMessage("Digite apenas números")
    } else {
        if (weight != 0 && height != 0) {
            let imc = (weight / (height ** 2)).toFixed(2)
            popup.imcResult.innerHTML = `Seu imc é de ${imc}`
            popup.open()
        } else {
            errorMessage("Campos não preenchidos")
        }
    }

    document.querySelector("#weight").value = ""
    document.querySelector("#height").value = ""
}

window.onkeydown = handleKeyDown

function handleKeyDown(event) {
    if(event.key == "Escape" && !popup.wrapper.classList.contains("hide")) {
        popup.close()
    }
}
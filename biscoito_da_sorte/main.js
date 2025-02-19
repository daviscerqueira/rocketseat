var quotes = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão."
]

function swapScreens() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")

    document.querySelector("#sorte p").innerHTML = quotes[Math.floor(Math.random() * 2)]
}
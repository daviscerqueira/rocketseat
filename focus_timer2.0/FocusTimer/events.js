import * as actionHandler from "./actions.js"
import { updateDisplay } from "./timer.js"
import * as sounds from "./sounds.js"
import * as el from "./elements.js"
import state from "./state.js"

export function registerControlButtons() {
    document.getElementById("controls").addEventListener('click', (event) => {
        sounds.buttonPressSound.play()
        const action = event.target.dataset.action 
        if (typeof(actionHandler[action]) == "function") {
            actionHandler[action]()
        }
    })
}

export function registerMusicButtons() {
    document.getElementById("music-wrapper").addEventListener('click', (event) => {
        if (event.target.classList.contains("clicked")) {
            event.target.classList.remove("clicked")
            state.songPlaying.pause()
        } else {
            if (document.querySelector(".clicked") != undefined) {
                document.querySelector(".clicked").classList.remove("clicked")
            }

            event.target.classList.add("clicked")
            actionHandler.playMusic(event.target.dataset.action)
        }
    })
}

export function setMinutes() {
    el.minutes.addEventListener("focus", () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
    })
}
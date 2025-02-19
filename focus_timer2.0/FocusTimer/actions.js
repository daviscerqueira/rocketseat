import * as sounds from "./sounds.js"
import * as timer from "./timer.js"
import state from './state.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
    sounds.buttonPressSound.play()
}

export function plus() {
    if (document.documentElement.classList.contains("running")) {
        return
    }

    state.minutes += 5
    if (state.minutes > 60) {
        state.minutes = 60
    }
    timer.updateDisplay()
}

export function minus() {
    if (document.documentElement.classList.contains("running")) {
        return
    }

    state.minutes -= 5
    if (state.minutes < 5) {
        state.minutes = 5
    }
    timer.updateDisplay()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    sounds.buttonPressSound.play()
}

export function playMusic(song) {
    if (state.songPlaying != null) {
        state.songPlaying.pause()
    }
    state.songPlaying = sounds[song]
    state.songPlaying.play()
}
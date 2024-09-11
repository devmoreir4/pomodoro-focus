import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonStopwatch,
    buttonSoundOn,
    buttonSoundOff,
    displayMinutes,
    displaySeconds
} from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonStopwatch
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset,
})

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonStopwatch.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
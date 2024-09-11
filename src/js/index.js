import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sounds from "./sounds.js"
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

const sounds = Sounds()

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
    sounds.pressButton()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sounds.pressButton()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sounds.pressButton()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sounds.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sounds.bgAudio.play()
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
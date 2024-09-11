import { Controls } from "./controls.js"
import { Timer } from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonStopwatch = document.querySelector('.stopwatch')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

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
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonStopwatch = document.querySelector('.stopwatch')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes, seconds

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStopwatch.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    setTimeout(function() {
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 2
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStopwatch.classList.add('hide')
    buttonStop.classList.remove('hide')
    countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
    resetControls()
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
    minutes = prompt('minutes?')
    updateTimerDisplay(minutes, 0)
})
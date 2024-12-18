export function Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonStopwatch
}) {

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStopwatch.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStopwatch.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function getMinutes() {
        let minutes = prompt('select the amount of minutes:')
        if(!minutes) {
            return false
        }

        minutes = Number(minutes);

        if (!Number.isInteger(minutes)) {
            alert('Please enter a valid integer.');
            return false;
        }

        return minutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}
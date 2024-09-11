export default function() {

    const buttonPressAudio = new Audio('src/assets/audios/button-press.wav')
    const kitchenTimer = new Audio('src/assets/audios/kichen-timer.mp3')
    const bgAudio = new Audio('src/assets/audios/bg-audio.mp3')

    bgAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timerEnd() {
        kitchenTimer.play()
    }

    return {
        pressButton,
        timerEnd,
        bgAudio
    }
}
export default function Sounds() {
  const buttonPressAudio = new Audio("src/assets/audios/button-press.wav");
  const kitchenTimer = new Audio("src/assets/audios/kichen-timer.mp3");

  function pressButton() {
    buttonPressAudio.play();
  }

  function timerEnd() {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timerEnd,
  };
}

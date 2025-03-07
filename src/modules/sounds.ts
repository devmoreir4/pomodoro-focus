export default function Sounds() {
  const buttonPressAudio = new Audio("src/assets/audios/button-press.wav");
  const kitchenTimer = new Audio("src/assets/audios/kichen-timer.mp3");
  const bgAudio = new Audio("src/assets/audios/bg-audio.mp3");

  bgAudio.loop = true;

  function pressButton(): void {
    buttonPressAudio.play();
  }

  function timerEnd(): void {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timerEnd,
    bgAudio,
  };
}

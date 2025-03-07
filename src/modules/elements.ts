const buttonPlay = document.querySelector(".play") as HTMLButtonElement;
const buttonPause = document.querySelector(".pause") as HTMLButtonElement;
const buttonStop = document.querySelector(".stop") as HTMLButtonElement;
const buttonStopwatch = document.querySelector(
  ".stopwatch"
) as HTMLButtonElement;
const buttonSoundOn = document.querySelector(".sound-on") as HTMLButtonElement;
const buttonSoundOff = document.querySelector(
  ".sound-off"
) as HTMLButtonElement;
const displayMinutes = document.querySelector(".minutes") as HTMLSpanElement;
const displaySeconds = document.querySelector(".seconds") as HTMLSpanElement;

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
  buttonSoundOn,
  buttonSoundOff,
  displayMinutes,
  displaySeconds,
};

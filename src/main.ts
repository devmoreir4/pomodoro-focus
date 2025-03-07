import "./style.css";

import Sounds from "./modules/sounds";
import { Controls } from "./modules/controls";
import { Timer } from "./modules/timer";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
  buttonSoundOn,
  buttonSoundOff,
  displayMinutes,
  displaySeconds,
} from "./modules/elements";

const sounds = Sounds();

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonStopwatch,
});

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: controls.reset,
});

buttonPlay.addEventListener("click", () => {
  controls.play();
  timer.countdown();
  sounds.pressButton();
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  timer.hold();
  sounds.pressButton();
});

buttonStop.addEventListener("click", () => {
  controls.reset();
  timer.reset();
  sounds.pressButton();
});

buttonSoundOff.addEventListener("click", () => {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
  sounds.bgAudio.play();
});

buttonSoundOn.addEventListener("click", () => {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
  sounds.bgAudio.pause();
});

buttonStopwatch.addEventListener("click", () => {
  const newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }
  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});

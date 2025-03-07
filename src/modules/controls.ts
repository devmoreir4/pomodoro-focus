export interface ControlsElements {
  buttonPause: HTMLButtonElement;
  buttonPlay: HTMLButtonElement;
  buttonStop: HTMLButtonElement;
  buttonStopwatch: HTMLButtonElement;
}

export function Controls({
  buttonPause,
  buttonPlay,
  buttonStop,
  buttonStopwatch,
}: ControlsElements) {
  function reset(): void {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonStopwatch.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function play(): void {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonStopwatch.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause(): void {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function getMinutes(): number | false {
    const minutesStr = prompt("Select the amount of minutes:");
    if (!minutesStr) {
      return false;
    }

    const minutes = Number(minutesStr);

    if (!Number.isInteger(minutes)) {
      alert("Please enter a valid integer.");
      return false;
    }

    return minutes;
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  };
}

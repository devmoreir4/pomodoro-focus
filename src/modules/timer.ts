export interface TimerProps {
  displayMinutes: HTMLElement;
  displaySeconds: HTMLElement;
  resetControls: () => void;
}

export function Timer({
  displayMinutes,
  displaySeconds,
  resetControls,
}: TimerProps) {
  let timerTimeout: number;
  let minutes = Number(displayMinutes.textContent);

  function updateDisplay(newMinutes = minutes, seconds = 0) {
    const formattedMinutes = String(newMinutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    displayMinutes.textContent = formattedMinutes;
    displaySeconds.textContent = formattedSeconds;

    document.title = `${formattedMinutes}:${formattedSeconds} - Pomodoro Focus`;
  }

  function updateMinutes(newMinutes: number) {
    minutes = newMinutes;
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function countdown() {
    timerTimeout = window.setTimeout(() => {
      let sec = Number(displaySeconds.textContent);
      let min = Number(displayMinutes.textContent);

      const isFinished = min <= 0 && sec <= 0;
      if (isFinished) {
        resetControls();
        updateDisplay(minutes, 0);
        return;
      }

      if (sec <= 0) {
        sec = 60;
        --min;
      }

      updateDisplay(min, sec - 1);
      countdown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeout);
  }

  return {
    updateDisplay,
    updateMinutes,
    reset,
    countdown,
    hold,
  };
}

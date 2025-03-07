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
  // Converte o conteúdo para número; se estiver vazio, pode ficar NaN, trate se necessário.
  let minutes: number = Number(displayMinutes.textContent);

  function updateDisplay(
    newMinutes: number = minutes,
    seconds: number = 0
  ): void {
    displayMinutes.textContent = String(newMinutes).padStart(2, "0");
    displaySeconds.textContent = String(seconds).padStart(2, "0");
  }

  function reset(): void {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function countdown(): void {
    timerTimeout = window.setTimeout(() => {
      let seconds = Number(displaySeconds.textContent);
      let currentMinutes = Number(displayMinutes.textContent);
      const isFinished = currentMinutes <= 0 && seconds <= 0;

      updateDisplay(currentMinutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay();
        // Aqui você pode chamar uma função de som para indicar o fim do timer.
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --currentMinutes;
      }

      updateDisplay(currentMinutes, seconds - 1);
      countdown();
    }, 1000);
  }

  function updateMinutes(newMinutes: number): void {
    minutes = newMinutes;
  }

  function hold(): void {
    clearTimeout(timerTimeout);
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}

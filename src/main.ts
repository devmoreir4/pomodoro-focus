import {
  pomodoroBtn,
  shortBreakBtn,
  longBreakBtn,
  startButton,
  displayMinutes,
  displaySeconds,
  timerTitle,
  taskList,
  addTaskButton,
  newTaskInput,
} from "./modules/elements";

import { Timer } from "./modules/timer";
import { TasksManager } from "./modules/tasks";
import Sounds from "./modules/sounds";

const sounds = Sounds();

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls: () => {
    sounds.timerEnd();
  },
});

timer.updateDisplay(25, 0);
timer.updateMinutes(25);

let isRunning = false;

function toggleActiveTab(clickedBtn: HTMLButtonElement) {
  [pomodoroBtn, shortBreakBtn, longBreakBtn].forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedBtn.classList.add("active");
}

pomodoroBtn.addEventListener("click", () => {
  toggleActiveTab(pomodoroBtn);
  timer.reset();
  timer.updateDisplay(25, 0);
  timer.updateMinutes(25);
  isRunning = false;
  startButton.textContent = "START";
  timerTitle.textContent = "Focus Timer";
});

shortBreakBtn.addEventListener("click", () => {
  toggleActiveTab(shortBreakBtn);
  timer.reset();
  timer.updateDisplay(5, 0);
  timer.updateMinutes(5);
  isRunning = false;
  startButton.textContent = "START";
  timerTitle.textContent = "Short Break Timer";
});

longBreakBtn.addEventListener("click", () => {
  toggleActiveTab(longBreakBtn);
  timer.reset();
  timer.updateDisplay(15, 0);
  timer.updateMinutes(15);
  isRunning = false;
  startButton.textContent = "START";
  timerTitle.textContent = "Long Break Timer";
});

startButton.addEventListener("click", () => {
  sounds.pressButton();
  if (!isRunning) {
    timer.countdown();
    startButton.textContent = "PAUSE";
    isRunning = true;
  } else {
    timer.hold();
    startButton.textContent = "START";
    isRunning = false;
  }
});

const tasksManager = TasksManager({ taskList });

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    tasksManager.addTask(taskText);
    newTaskInput.value = "";
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      loadingElement.style.display = "none";
    }
  }, 400);
});

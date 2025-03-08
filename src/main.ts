import { Timer } from "./modules/timer";
import { TasksManager } from "./modules/tasks";
import Sounds from "./modules/sounds";

const pomodoroBtn = document.querySelector(".pomodoro") as HTMLButtonElement;
const shortBreakBtn = document.querySelector(
  ".shortBreak"
) as HTMLButtonElement;
const longBreakBtn = document.querySelector(".longBreak") as HTMLButtonElement;
const startButton = document.querySelector(
  ".start-button"
) as HTMLButtonElement;

const displayMinutes = document.querySelector(".minutes") as HTMLSpanElement;
const displaySeconds = document.querySelector(".seconds") as HTMLSpanElement;

const taskList = document.querySelector(".task-list") as HTMLUListElement;
const addTaskButton = document.querySelector(".add-task") as HTMLButtonElement;
const newTaskInput = document.querySelector(
  ".new-task-input"
) as HTMLInputElement;

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
});

shortBreakBtn.addEventListener("click", () => {
  toggleActiveTab(shortBreakBtn);
  timer.reset();
  timer.updateDisplay(5, 0);
  timer.updateMinutes(5);
  isRunning = false;
  startButton.textContent = "START";
});

longBreakBtn.addEventListener("click", () => {
  toggleActiveTab(longBreakBtn);
  timer.reset();
  timer.updateDisplay(15, 0);
  timer.updateMinutes(15);
  isRunning = false;
  startButton.textContent = "START";
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

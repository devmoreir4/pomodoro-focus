export interface Task {
  id: number;
  text: string;
}

export interface TasksManagerProps {
  taskList: HTMLUListElement;
}

export function TasksManager({ taskList }: TasksManagerProps) {
  let tasks: Task[] = [];

  function addTask(taskText: string) {
    const task: Task = {
      id: Date.now(),
      text: taskText,
    };
    tasks.push(task);
    render();
  }

  function removeTask(id: number) {
    tasks = tasks.filter((task) => task.id !== id);
    render();
  }

  function render() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.text;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        removeTask(task.id);
      });

      li.appendChild(removeBtn);
      taskList.appendChild(li);
    });
  }

  return {
    addTask,
  };
}

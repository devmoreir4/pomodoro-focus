export interface Task {
  id: number;
  text: string;
  completed: boolean;
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
      completed: false,
    };
    tasks.push(task);
    render();
  }

  function removeTask(id: number) {
    tasks = tasks.filter((task) => task.id !== id);
    render();
  }

  function toggleTaskCompletion(id: number) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    render();
  }

  function render() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      const taskContent = document.createElement("div");
      taskContent.classList.add("task-content");

      const label = document.createElement("label");
      label.classList.add("custom-checkbox");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        toggleTaskCompletion(task.id);
      });

      const checkboxSpan = document.createElement("span");

      label.appendChild(checkbox);
      label.appendChild(checkboxSpan);

      const taskTextSpan = document.createElement("span");
      taskTextSpan.textContent = task.text;
      if (task.completed) {
        taskTextSpan.classList.add("completed");
      }

      taskContent.appendChild(label);
      taskContent.appendChild(taskTextSpan);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        removeTask(task.id);
      });

      li.appendChild(taskContent);
      li.appendChild(removeBtn);
      taskList.appendChild(li);
    });
  }

  return {
    addTask,
  };
}

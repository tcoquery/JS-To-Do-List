import { task } from "./modules/new-task";
import { saveTask } from "./modules/save-task";
import { loadTasks } from "./modules/load-tasks";

const newTask = document.getElementById("new-task");
const createTask = document.getElementById("create-task");
const allTasks = document.querySelector(".task-list");
const form = document.querySelector(".task-form");

newTask.addEventListener("click", () => {
    form.style.visibility = "visible";
})

createTask.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const lastTask = task(title, description, date);
    const list = document.createElement("li");
    saveTask(lastTask.title, lastTask);
    list.textContent = lastTask.title + " " + lastTask.description + " " + lastTask.date
    allTasks.appendChild(list);
    form.style.visibility = "hidden";
})

loadTasks();


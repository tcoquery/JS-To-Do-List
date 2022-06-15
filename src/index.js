import { task } from "./modules/new-task";


const newTask = document.getElementById("new-task");
const createTask = document.getElementById("create-task");
const allTasks = document.querySelector(".task-list");

newTask.addEventListener("click", () => {
    const form = document.querySelector(".task-form");
    form.style.visibility = "visible";
})

createTask.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const lastTask = task(title, description, date);
    const list = document.createElement("li");
    list.textContent = lastTask.title + " " + lastTask.description + " " + lastTask.date
    allTasks.appendChild(list);
    const form = document.querySelector(".task-form");
    form.style.visibility = "hidden";
})


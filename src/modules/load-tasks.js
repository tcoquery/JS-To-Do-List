import { deleteTask } from "./delete-task";

const projectTitle = document.querySelector(".project-name");
const allTasks = document.querySelector(".task-list");

function loadTasks() {
  let jsonString = localStorage.getItem(projectTitle.textContent)
  let retrievedObject = JSON.parse(jsonString);
  for(let i = 0; i < retrievedObject.children.length ; i++) {
    const listItem = document.createElement("li");
    const listItemLeft = document.createElement("div");
    const listItemTitle = document.createElement("div");
    const listItemDescription = document.createElement("div");
    const listItemDate = document.createElement("div");
    const checkBox = document.createElement("input");
    listItemLeft.className = "task-item-left";
    listItemTitle.className = `item${i}`
    listItemDescription.className = `item${i}`
    listItemDate.className = `item${i}`
    checkBox.setAttribute("type", "checkbox");
    listItemTitle.textContent = retrievedObject.children[i].title;
    listItemLeft.append(checkBox, listItemTitle);
    listItemDescription.textContent = retrievedObject.children[i].description;
    listItemDate.textContent = retrievedObject.children[i].date;
    listItem.append(listItemLeft, listItemDescription, listItemDate);
    listItem.classList.add("task-item");
    listItem.dataset.index = i;
    checkbox(checkBox, `.item${i}`)
    deleteTask(listItem, i)
    allTasks.appendChild(listItem);
  }
}

function checkbox(checkBox, className) {
  checkBox.addEventListener("click", () => {
    const listItems = document.querySelectorAll(className);
    listItems.forEach(item => {
      item.classList.toggle("striked");
    }) 
  })
}

export { loadTasks };
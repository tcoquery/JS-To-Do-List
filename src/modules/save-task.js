import { deleteTask } from "./delete-task";

const tasksList = document.querySelector(".task-list");

function saveTask(obj, project) {
  let jsonString = localStorage.getItem(project)
  let retrievedObject = JSON.parse(jsonString);
  retrievedObject.children.push(obj);
  localStorage.setItem(project, JSON.stringify(retrievedObject));
  const listItem = document.createElement("li");
  const listItemLeft = document.createElement("div");
  const listItemTitle = document.createElement("div");
  const listItemDescription = document.createElement("div");
  const listItemDate = document.createElement("div");
  const checkBox = document.createElement("input");
  listItemLeft.className = "task-item-left";
  listItemTitle.className = `item${retrievedObject.children.length - 1}`
  listItemDescription.className = `item${retrievedObject.children.length - 1}`
  listItemDate.className = `item${retrievedObject.children.length - 1}`
  checkBox.setAttribute("type", "checkbox");
  listItemTitle.textContent = obj.title;
  listItemLeft.append(checkBox, listItemTitle);
  listItemDescription.textContent = obj.description;
  listItemDate.textContent = obj.date;
  listItem.append(listItemLeft, listItemDescription, listItemDate);
  listItem.classList.add("task-item");
  listItem.dataset.index = retrievedObject.children.length - 1
  checkbox(checkBox, `.item${retrievedObject.children.length - 1}`)
  deleteTask(listItem, listItem.dataset.index)
  tasksList.appendChild(listItem);
};

function checkbox(checkBox, className) {
  checkBox.addEventListener("click", () => {
    const listItems = document.querySelectorAll(className);
    listItems.forEach(item => {
      item.classList.toggle("striked");
    }) 
  })
}

export {saveTask};
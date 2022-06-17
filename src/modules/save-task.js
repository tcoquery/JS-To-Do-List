import { deleteTask } from "./delete-task";

const tasksList = document.querySelector(".task-list");

function saveTask(obj, project) {
  let jsonString = localStorage.getItem(project)
  let retrievedObject = JSON.parse(jsonString);
  retrievedObject.children.push(obj);
  localStorage.setItem(project, JSON.stringify(retrievedObject));
  const listItem = document.createElement("li");
  listItem.textContent = obj.title + " " + obj.description + " " + obj.date;
  listItem.classList.add("task-item");
  listItem.dataset.index = retrievedObject.children.length - 1
  deleteTask(listItem, listItem.dataset.index)
  tasksList.appendChild(listItem);
};

export {saveTask};
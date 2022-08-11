import { deleteProject } from "./delete-project";

const allProjects = document.querySelector(".project-list");

function saveProject(objName, obj) {
  localStorage.setItem(objName, JSON.stringify(obj));
  const list = document.createElement("li");
  list.textContent = obj.name;
  list.classList.add("project-item")
  list.dataset.value = obj.name;
  deleteProject(list);
  allProjects.appendChild(list);
};

export {saveProject};
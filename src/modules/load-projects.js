import { deleteProject } from "./delete-project";

function loadProjects() {
  const allProjects = document.querySelector(".project-list");

  for(let i = 0; i < localStorage.length; i++) {
    let jsonString = localStorage.getItem(localStorage.key(i))
    let retrievedObject = JSON.parse(jsonString);
    const listItem = document.createElement("li");
    listItem.classList.add("project-item");
    listItem.dataset.value = retrievedObject.name;
    listItem.textContent = retrievedObject.name;
    deleteProject(listItem);
    allProjects.appendChild(listItem);
  }
}

export { loadProjects };
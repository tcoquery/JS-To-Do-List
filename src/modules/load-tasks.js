const projectTitle = document.querySelector(".project-name");
const allTasks = document.querySelector(".task-list");

function loadTasks() {
  let jsonString = localStorage.getItem(projectTitle.textContent)
  let retrievedObject = JSON.parse(jsonString);
  const listItem = document.createElement("li");
  listItem.textContent = retrievedObject.children[0];
  allTasks.appendChild(listItem);
  }


export { loadTasks };
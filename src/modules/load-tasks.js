
const projectTitle = document.querySelector(".project-name");
const allTasks = document.querySelector(".task-list");

function loadTasks() {
  let jsonString = localStorage.getItem(projectTitle.textContent)
  let retrievedObject = JSON.parse(jsonString);
  for(let i = 0; i < retrievedObject.children.length ; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = retrievedObject.children[i].title + " " + retrievedObject.children[i].description + " " + retrievedObject.children[i].date;
    listItem.classList.add("task-item");
    allTasks.appendChild(listItem);
  }
}

export { loadTasks };
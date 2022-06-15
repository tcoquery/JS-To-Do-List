function loadTasks() {
  const allTasks = document.querySelector(".task-list");

  for(let i = 0; i < localStorage.length; i++) {
    let jsonString = localStorage.getItem(localStorage.key(i))
    let retrievedObject = JSON.parse(jsonString);
    const listItem = document.createElement("li");
    listItem.textContent = retrievedObject.title + " " + retrievedObject.description + " " + retrievedObject.date
    allTasks.appendChild(listItem);
  }
}

export { loadTasks };
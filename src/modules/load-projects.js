function loadProjects() {
  const allProjects = document.querySelector(".project-list");
  const projectTitle = document.querySelector(".project-name");

  for(let i = 0; i < localStorage.length; i++) {
    let jsonString = localStorage.getItem(localStorage.key(i))
    let retrievedObject = JSON.parse(jsonString);
    const listItem = document.createElement("li");
    listItem.classList.add("project-item");
    listItem.dataset.value = retrievedObject.name;
    listItem.textContent = retrievedObject.name;
    allProjects.appendChild(listItem);
  }
}

export { loadProjects };
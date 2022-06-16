const allProjects = document.querySelector(".project-list");
const projectTitle = document.querySelector(".project-name");

function saveProject(objName, obj) {
  localStorage.setItem(objName, JSON.stringify(obj));
  const list = document.createElement("li");
  list.textContent = obj.name;
  list.classList.add("project-item")
  list.dataset.value = obj.name;
  projectTitle.textContent = obj.name;
  allProjects.appendChild(list);
};

export {saveProject};
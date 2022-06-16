import { loadTasks } from "./load-tasks";

const projectTitle = document.querySelector(".project-name");
const allTasks = document.querySelector(".task-list");

function defaultProject() {
  let jsonString = localStorage.getItem(localStorage.key(0));
  let defaultProject = JSON.parse(jsonString);
  projectTitle.textContent = defaultProject.name;
}

function projectContent() {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(project => {
      project.addEventListener("click", () => {
          projectTitle.textContent = project.getAttribute("data-value");
          allTasks.textContent = "";
          loadTasks();
      })
  })
}

export {projectContent, defaultProject};


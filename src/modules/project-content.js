import { loadTasks } from "./load-tasks";

const projectTitle = document.querySelector(".project-name");
const allTasks = document.querySelector(".task-list");

function defaultProject() {
  const defaultProject = document.getElementById("home");
  projectTitle.textContent = defaultProject.textContent;
}

function projectContent() {
  const lists = document.querySelectorAll("li");
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(project => {
      project.addEventListener("click", () => {
          projectTitle.textContent = project.getAttribute("data-value");
          if (projectTitle.textContent == project.getAttribute("data-value")) {
            lists.forEach(list => {
              list.classList.remove("li-active")
            })
            project.classList.add("li-active");
          }
          allTasks.textContent = "";
          loadTasks();
      })
  })
}

export {projectContent, defaultProject};


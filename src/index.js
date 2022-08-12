import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/regular'
import { task } from "./modules/new-task";
import { saveTask } from "./modules/save-task";
import { project } from "./modules/new-project";
import { saveProject} from "./modules/save-project";
import { loadProjects } from "./modules/load-projects";
import { defaultProject, projectContent } from "./modules/project-content"

const newTask = document.getElementById("new-task");
const newProject = document.getElementById("new-project");
const createTask = document.getElementById("create-task");
const taskForm = document.querySelector(".task-form");
const projectForm = document.querySelector(".project-form");
const createProject = document.getElementById("create-project");
const projectTitle = document.querySelector(".project-name");

newTask.addEventListener("click", () => {
    taskForm.style.display = "block";
})

window.onload = function() {
    let jsonString = localStorage.getItem("Home");
    if (jsonString == null) {
        const homeProject = project("Home", []);
        localStorage.setItem(homeProject.name, JSON.stringify(homeProject));
    }
}

window.onclick = function(event) {
    if (event.target == taskForm) {
        taskForm.style.display = "none";
    }
  } 

newProject.addEventListener("click", () => {
    projectForm.style.visibility = "visible";
})


createProject.addEventListener("click", () => { 
    const projectName = document.getElementById("project-name").value;
    if (projectName != "") {
        const lastProject = project(projectName, []);
        saveProject(lastProject.name, lastProject);
        projectForm.style.visibility = "hidden";
        projectContent();
    } else {
        return;
    }

})

createTask.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    if (title != "" && description != "" && date != "") {
        const lastTask = task(title, description, date);
        saveTask(lastTask, projectTitle.textContent);
        taskForm.style.display = "none";
    } else {
        return;
    }
})

loadProjects();
projectContent();
defaultProject();
document.getElementById("home").click();

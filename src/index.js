import { task } from "./modules/new-task";
import { saveTask } from "./modules/save-task";
import { loadTasks } from "./modules/load-tasks";
import { project } from "./modules/new-project";
import { saveProject} from "./modules/save-project";
import { loadProjects } from "./modules/load-projects";

const newTask = document.getElementById("new-task");
const newProject = document.getElementById("new-project");
const createTask = document.getElementById("create-task");
const taskForm = document.querySelector(".task-form");
const projectForm = document.querySelector(".project-form");
const createProject = document.getElementById("create-project");
const projectTitle = document.querySelector(".project-name");

newTask.addEventListener("click", () => {
    taskForm.style.visibility = "visible";
})

newProject.addEventListener("click", () => {
    projectForm.style.visibility = "visible";
})


createProject.addEventListener("click", () => { 
    const projectName = document.getElementById("project-name").value;
    console.log(projectName);
    const lastProject = project(projectName, []);
    saveProject(lastProject.name, lastProject);
    projectForm.style.visibility = "hidden";
})

loadProjects();

const projects = document.querySelectorAll(".project-item");
projects.forEach(project => {
    project.addEventListener("click", () => {
        projectTitle.textContent = project.getAttribute("data-value");
    })
})

createTask.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const lastTask = task(title, description, date);
    saveTask(lastTask.title, lastTask, projectTitle.textContent);
    taskForm.style.visibility = "hidden";
})



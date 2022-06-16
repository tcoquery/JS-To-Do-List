const projectTitle = document.querySelector(".project-name");

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
      })
  })
}

export {projectContent, defaultProject};


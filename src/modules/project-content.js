const projectTitle = document.querySelector(".project-name");

function projectContent() {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach(project => {
      project.addEventListener("click", () => {
          projectTitle.textContent = project.getAttribute("data-value");
      })
  })
}

export {projectContent};


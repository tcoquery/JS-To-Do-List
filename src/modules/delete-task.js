const projectTitle = document.querySelector(".project-name");

function deleteTask(item, index) {
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteButton.className = "delete-button";
  deleteIcon.className = "fa-regular fa-trash-can";
  deleteButton.appendChild(deleteIcon)
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
      let jsonString = localStorage.getItem(projectTitle.textContent)
      let retrievedObject = JSON.parse(jsonString);
      retrievedObject.children.splice(index, 1);
      localStorage.setItem(projectTitle.textContent, JSON.stringify(retrievedObject));
      item.remove();
    })
  }

export { deleteTask};
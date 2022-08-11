
function deleteProject(item) {
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteButton.className = "delete-button";
  deleteIcon.className = "fa-regular fa-trash-can";
  deleteButton.appendChild(deleteIcon)
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem(item.dataset.value);
    item.remove();
    deleteButton.remove();
  })
}



export {deleteProject};
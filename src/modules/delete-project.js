function deleteProject(item) {
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteButton.className = "delete-button";
  deleteIcon.className = "fa-regular fa-trash-can";
  deleteButton.appendChild(deleteIcon)
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    item.remove();
    deleteButton.remove();
    localStorage.removeItem(item.dataset.value);
  })
}

export {deleteProject};
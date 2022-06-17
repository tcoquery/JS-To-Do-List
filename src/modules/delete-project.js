
function deleteProject(item) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete-button");
  item.appendChild(deleteButton);
  
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem(item.dataset.value);
    item.remove();
    deleteButton.remove();
  })
}



export {deleteProject};
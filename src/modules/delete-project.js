
function deleteProject(item) {
  const deleteButton = document.createElement("i");
  deleteButton.className = "fa-regular fa-trash-can";
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    localStorage.removeItem(item.dataset.value);
    item.remove();
    deleteButton.remove();
  })
}



export {deleteProject};
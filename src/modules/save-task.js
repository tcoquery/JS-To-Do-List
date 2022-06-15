const allTasks = document.querySelector(".task-list");

function saveTask(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
  const list = document.createElement("li");
  list.textContent = obj.title + " " + obj.description + " " + obj.date;
  allTasks.appendChild(list);
};

export {saveTask};
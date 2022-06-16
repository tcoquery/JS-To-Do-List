const allTasks = document.querySelector(".task-list");

function saveTask(obj, project) {
  let jsonString = localStorage.getItem(project)
  let retrievedObject = JSON.parse(jsonString);
  retrievedObject.children.push(obj);
  localStorage.setItem(project, JSON.stringify(retrievedObject));
  const listItem = document.createElement("li");
  listItem.textContent = obj.title + " " + obj.description + " " + obj.date;
  allTasks.appendChild(listItem);
};

export {saveTask};
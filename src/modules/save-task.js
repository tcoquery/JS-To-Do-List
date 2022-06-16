const allTasks = document.querySelector(".task-list");

function saveTask(name, obj, project) {
  let jsonString = localStorage.getItem(project)
  let retrievedObject = JSON.parse(jsonString);
  retrievedObject.children.push(obj);
  localStorage.setItem(project, JSON.stringify(retrievedObject));
};

export {saveTask};
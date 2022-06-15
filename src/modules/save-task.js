function saveTask(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
};

export {saveTask};
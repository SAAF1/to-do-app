function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

//the newToDoText is the variable the getElementById saves the HTML info to?
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      //Note to self: the ":" means its an object literal
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }
// note:  => {code here} is the same as function() {code here} and the 'submit' is just
// the event (type of function) and brackets following it are the code inside the submit event function
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

}
window.onload = function() {
  onReady();
};

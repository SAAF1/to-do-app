function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  //new code from revision
  function deleteToDo(id){
    return toDos.filter(function(toDos) {
      return toDos !== id
    });
}

//the newToDoText is the variable the getElementById saves the HTML info to?
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      //Note to self: the ":" means its an object literal
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';
    id++;
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

      //my attempt at code starts from here until end of renderTheUI
      let minusBtn = document.createElement('button');
      minusBtn.innerHTML = "Delete";
      document.newLi.appendChild(minusBtn);

      minusBtn.addEventListener('click', function() {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      })
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

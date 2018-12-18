function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  var   removeList = document.getElementById('delete');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    let minusBtn.createElement('button');
    minusBtn.innerHTML = <span>Delete</span>;

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the Li
    newLi.appendChild(checkbox);

    newLi.appendChild(minusBtn);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    newLi.parentNode.removeChild(newLi)

addToDoForm.addEventListener('submit', event => {
   event.preventDefault();

   //get the text
   let title = newToDoText.value;

   //create a new li
   let newLi = document.createElement('li');

   //create a new input
   let checkbox = document.createElement('input');

   //set the input's type to checkbox
   checkbox.type = "checkbox";

     let minusBtn.createElement('button');
     minusBtn.innerHTML = <span>Delete</span>;

   //set the title
   newLi.textContent = title;

   //attach the checkbox to the Li
   newLi.appendChild(checkbox);

 newLi.appendChild(minusBtn);

   //attach the li to the ul
   toDoList.appendChild(newLi);

   //empty the input
   newToDoText.value = '';

     minusBtn.addEventListener('click', function() => {

     });
 });
  });

//   let minusBtn.createElement('button');
//   minusBtn.innerHTML = <span>Delete</span>;
//   minusBtn.addEventListener('click', () => {
//
// });

//   removeList.addEventListener('minusBtn', event => {
//     event.preventDefault();
//
//     let minusBtn.createElement('button');
//     minusBtn.innerHTML =
//     minusBtn.addEventListener('click', () => {
//
// });
//
//     let temp.innerHTML
//     //get text
//     let title = newRemoveText.value;
//
//     //create new input
//     let checkbox = document.createElement('input');
//
//     //set input's type to checkbox
//      checkbox.type = 'checkbox';
//
//
//     //to remove from Checklist
//     let throwawayNode = toDoList.removeChild('title');
//   });
}
window.onload = function() {
  onReady();
};

function onReady() {
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });

    newToDoText.value = '';
    id++;

    renderTheUI();
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');
      deleteButton.type = "reset";
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('reset', event => {
        event.preventDefault();
        toDos.filter(toDo => toDo.id == id);
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  //alert("The window has loaded!");
  onReady();
};

    // get the text
    //let title = newToDoText.value;

    // create a new Li
    //let newLi = document.createElement('li');

    //create a new input
    //let checkbox = document.createElement('input');

    //create a new input for delete
    //let deleteButton = document.createElement('input');

    //set the input's type to checkbox
    //checkbox.type = "checkbox";

    //set the title
    //newLi.textContent = title;

    //attach the checkbox to the Li
    //newLi.appendChild(checkbox);

    //attach the li to the ul
    //toDoList.appendChild(newLi);

    //empty the input
    //newToDoText.value = '';

    //Add Delete Button
    //let deleteLink = document.createElement("a");
        //deleteLink.textContent = "Delete";
        //deleteLink.href = "#";
        //deleteLink.addEventListener("click", deleteItem);
        //newLi.appendChild(deleteLink);

    //remove the li from the ul
    //function deleteItem() {
            //document.getElementById("toDoList").removeChild(newLi);
        //}
    //});
//}

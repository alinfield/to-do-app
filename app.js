function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new Li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //create a new input for delete
    let deleteButton = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the Li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //Add Delete Button
    let deleteLink = document.createElement("a");
        deleteLink.textContent = "Delete";
        deleteLink.href = "#";
        deleteLink.addEventListener("click", deleteItem);
        newLi.appendChild(deleteLink);

    //remove the li from the ul
    function deleteItem() {
            document.getElementById("toDoList").removeChild(newLi);
        }
    });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

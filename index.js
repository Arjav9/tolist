let TodoList = JSON.parse(localStorage.getItem('TodoList')) || [];

function addToDo() {
  let inputElement = document.querySelector('#Write-it');
  let dateElement = document.querySelector('#Select-it');
  let Save = inputElement.value;
  let SaveDate = dateElement.value;
  TodoList.push({ item: Save, dueDate: SaveDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
  localStorage.setItem('TodoList', JSON.stringify(TodoList));
}

function removeItem(index) {
  TodoList.splice(index, 1);
  displayItems();
  localStorage.setItem('TodoList', JSON.stringify(TodoList));
}

function displayItems() {
  let containerElement = document.querySelector('#Todo-container');
  let newHTML = '';
  for (let i = 0; i < TodoList.length; i++) {
    let { item, dueDate } = TodoList[i];
    newHTML += `
    <span style="font-weight:900;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size:large">${item}</span>
    <span style="font-weight:900;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size:large">${dueDate}</span>
    <button id="Done" onclick="removeItem(${i});">Done</button>
    `;
  }
  containerElement.innerHTML = newHTML;
}

displayItems();

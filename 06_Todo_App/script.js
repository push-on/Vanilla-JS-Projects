const input = document.getElementById('inputs');
const todoList = document.getElementById('todos');
const _submit = document.getElementById('enter');
const _Delete = document.getElementById('delete');

const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
const todoData = [];


function addTodo(todoText) {
    todoData.push(todoText);
    const li = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}
existingTodos.forEach((todo) => {
  addTodo(todo)
});

_submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value.length > 0) {
        addTodo(input.value);
    }
});

_Delete.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Delete");
});

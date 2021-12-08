
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');


addButton.addEventListener('click', addTask);
todoList.addEventListener('click', deleteTask);


function addTask(event){
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const checkTask = document.createElement('input');
    checkTask.setAttribute('type', 'checkbox');
    checkTask.classList.add('check-task')
    todoDiv.appendChild(checkTask);

    const newTask = document.createElement('li');
    newTask.innerText = todoInput.value;
    newTask.classList.add("todo-item");
    todoDiv.appendChild(newTask);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteTask(e){
    const item = e.target;
    if (item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    if (item.classList[0] === "check-task"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

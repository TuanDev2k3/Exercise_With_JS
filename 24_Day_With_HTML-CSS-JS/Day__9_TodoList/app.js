var input = document.querySelector('input')
var removeAll = document.querySelector('.removeAll')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')

removeAll.addEventListener('dblclick', function(){
    while (todos.hasChildNodes()) {
        todos.removeChild(todos.firstChild)
        saveTodoList()
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let value  = input.value.trim()

    if (value) {
        addTodoElement(value)
        saveTodoList()
    }
    input.value = ''
})

function addTodoElement(todo) {
    var li = document.createElement('li')
    li.innerHTML = `<span>${todo}</span>
                    <i class="fas fa-trash"></i>`


    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        saveTodoList()
    })
    // Remove Todo
    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList()
    })
    todos.appendChild(li);
}

function saveTodoList() {
    var todoList = []
    var todo = todos.querySelectorAll('li')
    todo.forEach(item =>{
        let text = item.querySelector('span').innerHTML
        todoList.push(text);
    })
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

function loadTodoList() {
    let todoList = JSON.parse(localStorage.getItem('todoList'))
    todoList.forEach(item =>
        addTodoElement(item)
    )
}
loadTodoList()

let input = document.querySelector('#input-box')
let list = document.querySelector('#list')
let btnAdd = document.querySelector('button')
let removeBtn = document.querySelector('li i')

btnAdd.addEventListener('click', function(){
    let value = input.value.trim()
    if(value){
        AddTodo(value)
        savetodo()
    }
        
})

function AddTodo(value) {
    let li = document.createElement('li')
    li.innerHTML = `<span>${value}</span>
                    <i class="fas fa-times"></i>`
    list.appendChild(li)
    input.value = ""

    li.addEventListener('click', function(){
        this.classList.toggle('check')
    })
    // Remove Todo
    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove()
        savetodo()
    })
}

function savetodo(){
    var todoList = []
    var todos = list.querySelectorAll('li')
    todos.forEach(todo =>{
        let text = todo.querySelector('span').innerHTML
        todoList.push(text)
    })
    localStorage.setItem('todoList', JSON.stringify(todoList))
}
function loadTodoList() {
    let todoList = JSON.parse(localStorage.getItem('todoList'))
    todoList.forEach(item =>
        AddTodo(item)
    )
}
loadTodoList()
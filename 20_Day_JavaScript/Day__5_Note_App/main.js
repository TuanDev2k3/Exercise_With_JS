let btnEdit = document.querySelector('.btnEdit')
let noteContent = document.querySelector('.notes-content')

createNote()
function createNote(){
    let note = document.createElement('p')
    note.setAttribute("contenteditable", "true")
    note.setAttribute("class", "input-box")
    note.innerHTML = `<img src="./img/delete.png" alt="">`

    noteContent.appendChild(note)
    note.querySelector('img').addEventListener('click', function(){
        this.parentElement.remove()
    })
}       

btnEdit.addEventListener('click', createNote)

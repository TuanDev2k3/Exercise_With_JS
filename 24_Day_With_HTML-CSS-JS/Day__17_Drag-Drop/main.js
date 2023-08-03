let boxes = document.querySelectorAll('.box')
let target = document.querySelector('.target')

target.addEventListener('dragstart', function(){
    this.classList.add('darging')
})
target.addEventListener('dragend', function(){
    this.classList.remove('darging')
})

boxes.forEach(box =>{
    box.addEventListener('dragover', function(e){
        e.preventDefault()
        this.appendChild(target)
    })

})

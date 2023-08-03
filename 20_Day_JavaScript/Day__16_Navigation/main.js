let lists = document.querySelectorAll('.navbar ul li')
let circle = document.getElementById('circle')

lists.forEach(item =>{
    item.addEventListener('click', function(){
        for(list of lists)
            list.style.opacity = 1

        circle.style.left = (70 * this.value) + 'px'
        circle.innerHTML = this.innerHTML
        this.style.opacity = 0
    })
})
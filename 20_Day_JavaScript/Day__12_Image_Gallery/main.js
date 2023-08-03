let gallery = document.querySelector('.gallery')
let back = document.getElementById('back')
let next = document.getElementById('next')

next.addEventListener('click', function(){
    gallery.scrollLeft += 700
})

back.addEventListener('click', function(){
    gallery.scrollLeft -= 700
})

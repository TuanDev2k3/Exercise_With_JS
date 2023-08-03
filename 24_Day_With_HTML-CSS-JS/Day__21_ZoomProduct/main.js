let img = document.querySelector('.zoom img')
let mirror = document.querySelector('#mirror')

img.addEventListener('mousemove', function(e){
    mirror.classList.remove('hide')
    mirror.style.top = `${e.clientY}px`
    mirror.style.left = `${e.clientX}px`

    mirror.style.backgroundSize = `1000px 1000px`

    var MouseOfWidth = (e.offsetX / this.offsetWidth) * 100
    var MouseOfHeight = (e.offsetY / this.offsetHeight) * 100

    mirror.style.backgroundPosition = `${MouseOfWidth}% ${MouseOfHeight}%`
})
img.addEventListener('mouseleave', function(){
    mirror.classList.add('hide')
})
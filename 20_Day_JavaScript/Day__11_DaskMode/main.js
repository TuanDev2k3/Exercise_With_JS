let icon = document.querySelector('#icon')

icon.addEventListener('click', function(){
    document.body.classList.toggle('mode')
    if (document.body.classList.contains('mode')){
        icon.src = "./img/moon.png"
    }
    else{
        icon.src = "./img/sun.png"
    }
})
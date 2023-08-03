let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', function(){
    let screeHeght = window.innerHeight

    boxes.forEach(box =>{
        let boxTop = box.getBoundingClientRect().top;
        if (boxTop < screeHeght)
            box.classList.add('show')
        else 
            box.classList.remove('show')
    })
});

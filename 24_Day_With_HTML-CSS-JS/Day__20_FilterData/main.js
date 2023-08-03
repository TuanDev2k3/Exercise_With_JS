let images = document.querySelectorAll('img')
let btnList = document.querySelectorAll('button')

btnList.forEach(item =>{
    let typeBtn = item.getAttribute('type')
    item.addEventListener('click', function(){
        activeBtn(item)
        images.forEach(food =>{
            let typeFood = food.getAttribute('type')
            if (typeBtn == typeFood || typeBtn == 'All')
                food.classList.remove('hide')
            else
                food.classList.add('hide')
        })
    })
})

function activeBtn(item){
    btnList.forEach(btn =>{
        btn.classList.remove('active')
    })
    item.classList.add('active')
}
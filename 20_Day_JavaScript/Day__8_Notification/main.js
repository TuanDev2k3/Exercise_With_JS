var btnSuccess = document.querySelector('.success')
var btnWarning = document.querySelector('.warning')
var btnError = document.querySelector('.error')
let notifys = document.querySelector('.notifys')

btnSuccess.addEventListener('click', function(){
    createNotify('success')
})

btnWarning.addEventListener('click', function(){
    createNotify('warning')
})

btnError.addEventListener('click', function(){
    createNotify('error')
})

function createNotify(status) {
    let temp

    switch (status){
        case "success":
            temp = `<i class="fas fa-check-circle" style="color: green;"></i>
            <h3 style="color: green;">Success message</h3>`
            break;

        case "error":
            temp = `<i class="fas fa-exclamation-triangle" style="color: red;"></i>
            <h3 style="color: red;">Error message</h3>`
            break;

        case "warning":
            temp = `<i class="fas fa-exclamation-circle" style="color: orange;"></i>
            <h3 style="color: orange;">Warning message</h3>`
            break;
    }

    let notifi = document.createElement('div')
    notifi.classList.add('notify', status)
    notifi.innerHTML = `${temp}<span></span>`
    notifys.appendChild(notifi)

    setTimeout(function(){
        notifi.remove()
    }, 5000)
}
var btnSuccess = document.querySelector('.success')
var btnWarning = document.querySelector('.warning')
var btnError = document.querySelector('.error')

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
    let temp;

    switch(status) {
        case 'success':
            temp = `<i class="fas fa-check-circle"></i>
            <span class="message">This is success message</span>`
            break;
    
        case 'warning':
            temp = `<i class="fas fa-exclamation-circle"></i>
            <span class="message">This is warning message</span>`
            break;
        
        case 'error':
            temp = `<i class="fas fa-exclamation-triangle"></i>
            <span class="message">This is error message</span>`
            break;
    }
    let notify = document.createElement('div')
    notify.classList.add('notify')
    notify.classList.add(status)

    notify.innerHTML = `${temp}
                <span class="countdown"></span>`

    var notifyList = document.querySelector('.notifys')
    notifyList.appendChild(notify)

    setTimeout(function() {
        notify.style.animation = 'scrollHide 1s linear forwards'
    }, 4000)

    setTimeout(function(){
        notify.remove()
    }, 5000)
}
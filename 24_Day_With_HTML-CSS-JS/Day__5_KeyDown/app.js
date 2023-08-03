var alert = document.querySelector('.alert')
var box = document.querySelector('.box')
var eKey = document.querySelector('.key p:last-child')
var eLocation = document.querySelector('.locaton p:last-child')
var eWhich = document.querySelector('.which p:last-child')
var eCode = document.querySelector('.code p:last-child')


document.addEventListener('keydown', function(e){

    eKey.innerHTML = e.key;
    eLocation.innerHTML = e.location;
    eWhich.innerHTML = e.which;
    eCode.innerHTML = e.code;
    document.querySelector('.result').innerHTML = e.key;

    alert.classList.add('hide');
    box.classList.remove('hide');

})
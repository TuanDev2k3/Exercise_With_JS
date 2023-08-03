let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('form')

function showError(input, mess) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerHTML = mess
}
function showTrue(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerHTML = ""
}
function checkEmpty(input) {
    if (input.value.trim() == '') {
        showError(input, "Ko được để trống")
    }
    else {
        showTrue(input)
    }
}
function checkEmail(input) {
    checkEmpty(input)
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.value = input.value.trim()
    let ischeck = regexEmail.test(input.value)
    if (!ischeck) {
        showError(input, "Email ko hợp lệ")
    }
    else {
        showTrue(input)
    }

}
function checkLeghth(input) {
    checkEmpty(input)
    input.value = input.value.trim()
    if (input.value.length < 4)
        showError(input, "Ko ít hơn 4 kí tự")
    else if (input.value.length > 10)
        showError(input, "Ko nhiều hơn 10 kí tự")
    else
        showTrue(input)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkEmail(email)
    checkLeghth(password)
})
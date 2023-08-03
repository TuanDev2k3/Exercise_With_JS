var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirm_Password = document.querySelector('#confirm-Password');
var form = document.querySelector('form');

function showError(input, mess) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerHTML = mess;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerHTML = '';
}
// ======== Cac function check loi ==========
function checkEmptyError(listInput) {
    let isEmptError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptError = true;
            showError(input, 'Khong duoc de trong')
        }
        else {
            showSuccess(input);
        }
    });
    return isEmptError
}

function checkEmailError(input) {
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    // .test(): Kiem tra trong input.value co ki tu thuoc regexEmail ko --> true / false.
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    }
    else {
        showError(input, 'Email khong hop le');
    }
    return isEmailError 
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if(input.value.length < min){
        showError(input, `Phai co it nhat ${min} ki tu`);
        return true
    }
    else if (input.value.length > max){
        showError(input, `Khong vuot qua ${max} ki tu`);
        return true
    }
    else{
        return false
    }
}

function checkPassWordError(passInput, cfPassInput){
    passInput.value = passInput.value.trim()
    cfPassInput.value = cfPassInput.value.trim()
    if (passInput.value !== cfPassInput.value) {
        showError(cfPassInput, 'Password khong trung khop');
        return true
    }
    else{
        return false
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault() // Ko load lai trang 

    let isEmptError = checkEmptyError([username, email, password, confirm_Password]);
    let isEmailError = checkEmailError(email);
    let isNameError = checkLengthError(username, 4, 10)
    let isPassWordError = checkLengthError(password, 4, 10)
    let iscfPassError = checkPassWordError(password, confirm_Password)

    if (isEmptError || isEmailError || isNameError || isPassWordError || iscfPassError) {
        // 1 in 5 is true thi STOP Program !!!!
    }
    else{
        // All false (ko error) thi thuc hien mot khoi lenh ....
    }
})
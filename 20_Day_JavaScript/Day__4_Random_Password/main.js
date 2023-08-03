let passBox = document.querySelector('#password')
let eye = document.getElementById('eye')
let lenght = 12

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let tolowCase = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let symbol = "!@#$%^&*()+-=/|{}[]<>?"

const allChar = upperCase + tolowCase + number + symbol


function createPass(){
    let password = ""

    while(password.length < lenght)
        password += allChar[Math.floor(Math.random() * allChar.length)]
    
    passBox.value = password
}

// Show and Hide PassWord
function ShowHide_Eye(){
    if (passBox.type === "text"){
        passBox.type = "password"
        eye.src = "./img/eye-close.png"
    }
    else{
        passBox.type = "text"
        eye.src = "./img/eye-open.png"
    }  
}

function copyPass(){
    passBox.select()
    document.execCommand("Copy")
}

document.querySelector('.btn').addEventListener('click', createPass)
document.querySelector('.display #copy').addEventListener('click', copyPass)
eye.addEventListener('click', ShowHide_Eye)
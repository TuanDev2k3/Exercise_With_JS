let boxLogin = document.getElementById('login');
let boxSignUp = document.getElementById('sign');
let btnLogin = document.getElementById('login-up');
let btnSign = document.getElementById('sign-up');


btnLogin.onclick = () =>{
    boxLogin.classList.toggle('active');
    boxSignUp.classList.remove('active');
}
btnSign.onclick = () =>{
    boxSignUp.classList.toggle('active');
    boxLogin.classList.remove('active');
}

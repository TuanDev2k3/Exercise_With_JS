let inputBox = document.querySelector("#input-box")
let btnCode = document.querySelector('.btn')
let imgCode = document.querySelector('#img_Code')
let code_Box = document.querySelector('.code_QR')

btnCode.addEventListener('click', createQR)

function createQR(){
    if (inputBox.value.trim()){
        imgCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        inputBox.value.trim()

        code_Box.classList.add('show')
    }
    else{
        code_Box.classList.remove('show')
        inputBox.classList.add('error')
        setTimeout(()=>{
            inputBox.classList.remove('error')
        }, 1000)
    }
}
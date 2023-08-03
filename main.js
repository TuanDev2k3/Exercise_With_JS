let btnClick = document.querySelectorAll('button')
let boxSign = document.querySelector('.box-sign')
let boxLogin = document.querySelector('.box-login')

// Open Login && Sign Up
btnClick.forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelector('.inner').classList.toggle('active')
    })
})

function showError(input) {
    let parent = input.parentElement;
    let icon = parent.querySelector('.input-box i')
    parent.classList.add('error');
    icon.classList.add('show')
}

function showSuccess(input) {
    let parent = input.parentElement;
    let icon = parent.querySelector('.input-box i')
    parent.classList.remove('error');
    icon.classList.remove('show');
}

function checkLength(input) {
    input.value = input.value.trim()
    if (input.value.length < 5) {
        showError(input);
        return true
    }
    else if (input.value.length > 15) {
        showError(input);
        return true
    }
    else {
        showSuccess(input)
        return false
    }
}

function checkValue(value_1, value_2) {
    value_1.value = value_1.value.trim()
    value_2.value = value_2.value.trim()

    if (value_1.value === value_2.value) {
        return true
    }
    else return false
}

// ====== Sign Up Tai khoan =====
boxSign.querySelector('.idStuden').addEventListener('input', function () {
    checkLength(this)
})
boxSign.querySelector('.passWord').addEventListener('input', function () {
    checkLength(this)
})

let UserList = []
boxSign.querySelector('.btn').addEventListener('click', function () {
    let idStudent = boxSign.querySelector('.idStuden');
    let password = boxSign.querySelector('.passWord');
    let password_2 = boxSign.querySelector('.passWord_2');

    if (!checkLength(idStudent) && !checkLength(password)
        && checkValue(password, password_2)) {
        let item = {
            id: idStudent.value,
            pass: password.value
        }
        UserList.push(item)
        localStorage.setItem('userItem', JSON.stringify(UserList))
        alert("Đăng kí thành công...")
        idStudent.value = password.value = password_2.value = ""
    }
    else {
        password_2.value = password.value = ""
        alert("Đăng kí tài khoản thất bại. Vui lòng kiểm tra lại thông tin...")
    }
})

// ====== Login Up Tai khoan =====
boxLogin.querySelector('.idStuden').addEventListener('input', function () {
    checkLength(this)
})
boxLogin.querySelector('.passWord').addEventListener('input', function () {
    checkLength(this)
})

boxLogin.querySelector('.btn').addEventListener('click', function () {
    let idStudent = boxLogin.querySelector('.idStuden');
    let password = boxLogin.querySelector('.passWord');
    let list = JSON.parse(localStorage.getItem('userItem'))
    let isLogin = false

    if (list) {
        list.forEach(item => {
            if (idStudent.value === item.id && password.value === item.pass) {
                isLogin = true
                window.location.href = "./24_Day_With_HTML-CSS-JS/index.html"
            }
        })
    }

    if (!isLogin)
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại hoặc đăng kí tài khoản mới...")
})
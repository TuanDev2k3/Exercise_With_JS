let start_btn = document.querySelector('.start-btn button')
let info_box = document.querySelector('.info-box')
let exitBtn = document.querySelector('.buttons .exit')
let continueBtn = document.querySelector('.buttons .continue')
let appQuiz = document.querySelector('.app')
let result = document.querySelector('.result-box')

start_btn.addEventListener('click', function () {
    info_box.classList.remove('hide')
})

exitBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
})

continueBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
    start_btn.classList.add('hide')
    startQuiz()
})

//========== Questions ========
let questions = [
    {
        quest: "Ai là người đưa ra các tiêu chuẩn Web?",
        answers: ["W3C", "Apple", "Google", "Microsoft"],
        correct: 0
    },
    {
        quest: "Thuộc tính nào tô màu đỏ chữ hoặc kí tự trong CSS",
        answers: ["color: #ff0000", "color: #ff00ff", "color: #fff00e", "color: #fff"],
        correct: 0
    },
    {
        quest: "Những thẻ HTML nào dùng để định nghĩa cấu trúc của bảng?",
        answers: ["table, tr, body", "table, tr, td", "tr, head", "div, span"],
        correct: 1
    },
    {
        quest: "Thẻ HTML nào dùng để chèn một hình ảnh?",
        answers: ["src", "div", "a", "img"],
        correct: 3
    },
    {
        quest: "Các thẻ HTML có thể viết liền nhau mà không cần bắt buộc xuống dòng mới?",
        answers: ["Sai", "Tùy trường hợp", "Đúng", "Khác"],
        correct: 2
    },
]

let question = document.querySelector('.question')
let btnAns = document.querySelectorAll('.btn')
let indexQuest = 0
let correct = 0
let score = 0
let isSelect = true

function startQuiz() {
    appQuiz.classList.remove('hide')
    indexQuest = score = 0
    loadQuest(indexQuest)
}

function loadQuest(index) {
    question.innerHTML = `${index + 1}. ` + questions[index].quest
    correct = questions[index].correct
    btnAns.forEach((item, i) => {
        item.innerHTML = `${i + 1}. ` + questions[index].answers[i]
        item.classList.remove('false', 'true')
    })
    isSelect = true
    timerQuiz()
}

// Next Question
document.querySelector('#next-btn').addEventListener('click', () => {
    // isSelect = true la chua chon dap an ko dc next
    if (isSelect) return

    if (indexQuest < questions.length - 1) {
        indexQuest++
        loadQuest(indexQuest)
    }
    else {
        result.classList.remove('hide')
        appQuiz.classList.add('hide')
        document.querySelector('.score span').innerHTML = `${score}/${questions.length}`
    }
})

// Check Answer true or false
btnAns.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (isSelect) {
            btnAns[correct].classList.add('true')
            if (correct == i) {
                score++
            }
            else {
                item.classList.add('false')
            }
        }
        isSelect = false
    })
})

// Thao tac voi Result Box
document.querySelector('.result-btn .exit').addEventListener('click', () => {
    result.classList.add('hide')
    start_btn.classList.remove('hide')
})

document.querySelector('.result-btn .continue').addEventListener('click', () => {
    result.classList.add('hide')
    startQuiz()
})

// ==== Time ====
let timeBox = document.querySelector('header .timer .time-sec')
function timerQuiz() {
    let time = 15
    timeBox.innerHTML = time
    var setTimer = setInterval(() => {
        if (time > 0 && isSelect) {
            time--
            timeBox.innerHTML = time
        }
        else {
            btnAns[correct].classList.add('true')
            isSelect = false
            clearInterval(setTimer)
        }

    }, 500)
}

let chatInput = document.querySelector('.chat-input textarea')
let sendChatBtn = document.querySelector('.chat-input i')
let chatbox = document.querySelector('.chatbox')
let togglerBtn = document.querySelector('.chatbot-toggler')

let userMessage;

function createChatLi(message, className) {
    let chatLi = document.createElement('li')
    chatLi.classList.add('chat', className)

    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<i class="fas fa-robot"></i><p>${message}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi
}

async function generateResponse() {
    var messChatbot
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userMessage}&appid=cb8d857e9528680474d1a7a90b239fba`
    let data = await fetch(apiURL).then(res => res.json())

    if (data.cod == 200) {
        var city = data.name
        var country = data.sys.country
        var eye = data.visibility / 1000 + 'km'
        var wind = Math.round(data.wind.speed * 3.6) + 'km/h'
        var sun = data.main.humidity + '%'
        var temp = Math.round(data.main.temp - 273.15) + ` <sup>o</sup>C`
        var status = data.weather[0].main

        // Truy xuat thong tin
        messChatbot = `Tên:  ${city}<br>
                    Quốc gia:  ${country}<br>
                    Tầm nhìn:  ${eye}<br>
                    Gió:  ${wind}<br>
                    Độ ẩm:  ${sun}<br>
                    Nhiệt độ:  ${temp}<br>
                    Trạng thái:  ${status}`
    }
    else {
        // Clear bang console khi nhap sai dia diem
        console.clear();
        messChatbot = `Địa điểm không được tìm thấy...<br>
        Vui lòng kiểm tra lại thông tin hoặc tra Google cho nhanh...<br>
        Thank you !!!`
    }

    setTimeout(() => {
        chatbox.appendChild(createChatLi(messChatbot, "incoming"))
        chatbox.scrollTo(0, chatbox.scrollHeight)
    }, 3000)
}

function handleChat() {
    userMessage = chatInput.value.trim()
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"))
    chatInput.value = ''
    chatInput.focus()
    chatbox.scrollTo(0, chatbox.scrollHeight)
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Loading...", "incoming"))
        chatbox.scrollTo(0, chatbox.scrollHeight)
        generateResponse()
    }, 300)
}

sendChatBtn.addEventListener('click', handleChat)

togglerBtn.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('show-chatbot')
})

document.querySelector('header i').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('show-chatbot')
})
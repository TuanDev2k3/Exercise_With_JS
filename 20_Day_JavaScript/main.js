var list = [
    {
        id: 1,
        name: 'Day 1: Weather App',
        link: './Day__1_Weather_App/index.html'
    },
    {
        id: 2,
        name: 'Day 2: Todo List',
        link: './Day__2_Todo_List/index.html'
    },
    {
        id: 3,
        name: 'Day 3: Quizz App',
        link: './Day__3_Quiz_App/index.html'
    },
    {
        id: 4,
        name: 'Day 4: Random PassWord',
        link: './Day__4_Random_Password/index.html'
    },
    {
        id: 5,
        name: 'Day 5: Note App',
        link: './Day__5_Note_App/index.html'
    },
    {
        id: 6,
        name: 'Day 6: Search Image',
        link: './Day__6_SearchAPI/index.html'
    },
    {
        id: 7,
        name: 'Day 7: Create QRCode',
        link: './Day__7_Create_QRCode/index.html'
    },
    {
        id: 8,
        name: 'Day 8: Notification',
        link: './Day__8_Notification/index.html'
    },
    {
        id: 9,
        name: 'Day 9: Music Player',
        link: './Day__9_Music_Player/index.html'
    },
    {
        id: 10,
        name: 'Day 10: Calculator App',
        link: './Day__10_Calculator_App/index.html'
    },
    {
        id: 11,
        name: 'Day 11: Dark Mode',
        link: './Day__11_DaskMode/index.html'
    },
    {
        id: 12,
        name: 'Day 12: Image Gallery',
        link: './Day__12_Image_Gallery/index.html'
    },
    {
        id: 13,
        name: 'Day 13: Validate Form',
        link: './Day__13_Validate_Form/index.html'
    },
    {
        id: 14,
        name: 'Day 14: Mini Calendar',
        link: './Day__14_Mini_Calendar/index.html'
    },
    {
        id: 15,
        name: 'Day 15: Progress Bar',
        link: './Day__15_Progress_Bar/index.html'
    },
    {
        id: 16,
        name: 'Day 16: Navigation',
        link: './Day__16_Navigation/index.html'
    },
    {
        id: 17,
        name: 'Day 17: Animated Card',
        link: './Day__17_Animated_Card/index.html'
    },
    {
        id: 18,
        name: 'Day 18: Profile Card 3D',
        link: './Day__18_Profile_Card_3D/index.html'
    },
    {
        id: 19,
        name: 'Day 19: Calendar App',
        link: './Day__19_Calendar_App/index.html'
    },
    {
        id: 20,
        name: 'Day 20: Animation Menu',
        link: './Day__20_Animation_Menu/index.html'
    }
]
let container = document.querySelector('.container')
list.forEach(item =>{
    render(item)
})

function render(item) {
    let contain = document.createElement('div')
    contain.classList.add('contain')
    contain.innerHTML = `<img src="./Image/img4.jpg">
                        <div class="text">${item.name}</div>
                        <span>Day ${item.id}</span>`

    container.appendChild(contain)

    contain.addEventListener('click', function(){
        window.location.href = item.link
    })
}

document.querySelector('.item_1').addEventListener('click', ()=>{
    window.location.href = "../24_Day_With_HTML-CSS-JS/index.html"
})
document.querySelector('.item_2').addEventListener('click', ()=>{
    window.location.href = "../20_Day_JavaScript/index.html"
})
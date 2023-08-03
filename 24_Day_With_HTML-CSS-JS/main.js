var list = [
    {
        id: 1,
        name: 'Day 1: Design Card',
        link: './Day__1_Card/index.html'
    },
    {
        id: 2,
        name: 'Day 2: Design Profile',
        link: './Day__2_Profile/index.html'
    },
    {
        id: 3,
        name: 'Day 3: Show Image',
        link: './Day__3_ShowImg/index.html'
    },
    {
        id: 4,
        name: 'Day 4: Clock App',
        link: './Day__4_ClockApp/index.html'
    },
    {
        id: 5,
        name: 'Day 5: KeyDown Event',
        link: './Day__5_KeyDown/index.html'
    },
    {
        id: 6,
        name: 'Day 6: Search Tag',
        link: './Day__6_SearchTag/index.html'
    },
    {
        id: 7,
        name: 'Day 7: Validate Form',
        link: './Day__7_ValidateForm/index.html'
    },
    {
        id: 8,
        name: 'Day 8: Weather App',
        link: './Day__8_Weather/index.html'
    },
    {
        id: 9,
        name: 'Day 9: Todo List',
        link: './Day__9_TodoList/index.html'
    },
    {
        id: 10,
        name: 'Day 10: Animation',
        link: './Day__10_Animation/index.html'
    },
    {
        id: 11,
        name: 'Day 11: Slider Range',
        link: './Day__11_SliderRange/index.html'
    },
    {
        id: 12,
        name: 'Day 12: Format File',
        link: './Day__12_FormatFile/index.html'
    },
    {
        id: 13,
        name: 'Day 13: Slide Show',
        link: './Day__13_SlideShow/index.html'
    },
    {
        id: 14,
        name: 'Day 14: Filter Product',
        link: './Day__14_FilterProduct/index.html'
    },
    {
        id: 15,
        name: 'Day 15: Scroll Animation',
        link: './Day__15_ShowScroll/index.html'
    },
    {
        id: 16,
        name: 'Day 16: Counter Up',
        link: './Day__16_CounterUp/index.html'
    },
    {
        id: 17,
        name: 'Day 17: Drag Drop',
        link: './Day__17_Drag-Drop/index.html'
    },
    {
        id: 18,
        name: 'Day 18: Draw App',
        link: './Day__18_DrawApp/index.html'
    },
    {
        id: 19,
        name: 'Day 19: Dark Mode',
        link: './Day__19_DarkMode/index.html'
    },
    {
        id: 20,
        name: 'Day 20: Filter Data',
        link: './Day__20_FilterData/index.html'
    },
    {
        id: 21,
        name: 'Day 21: Zoom Product',
        link: './Day__21_ZoomProduct/index.html'
    },
    {
        id: 22,
        name: 'Day 22: Sign Up',
        link: './Day__22_SignUp/index.html'
    },
    {
        id: 23,
        name: 'Day 23: Chatbot',
        link: './Day__23_ChatBot/index.html'
    },
    {
        id: 24,
        name: 'Day 24: Age Calculator',
        link: './Day__24_Age_Calculator/index.html'
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
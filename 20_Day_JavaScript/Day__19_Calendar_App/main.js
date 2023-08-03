let currentDate = document.querySelector('.current-date')
let days = document.querySelector('.days')
let icons = document.querySelectorAll('.icons i')

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const MonthAll = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"]

function renderCal() {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay() // first day of month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate() // last date of month
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate() // last date of previous month
    let lastDayOftMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay() // last day of month
    let liDay = ""
    for (let i = firstDayOfMonth; i > 0; i--) {
        liDay += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday
        if(date.getDate() === i && currMonth === new Date().getMonth() 
            && currYear === new Date().getFullYear()){
                isToday = "active"
            }
        liDay += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDayOftMonth; i < 6; i++) {
        liDay += `<li class="inactive">${i - lastDayOftMonth + 1}</li>`
    }

    currentDate.innerHTML = MonthAll[currMonth] + `  ${currYear}`
    days.innerHTML = liDay
}
renderCal()
icons.forEach(icon => {
    icon.addEventListener('click', function () {
        if (this.classList.contains('prev'))
            currMonth--
        else
            currMonth++

        //  New Year or Old Year
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth)
            currYear = date.getFullYear()
            currMonth = date.getMonth();
        }
        else{
            date = new Date()
        }
        renderCal()
    })
})
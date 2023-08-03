let date = document.querySelector('.date')
let day = document.querySelector('.day')
let month = document.querySelector('.month')
let year = document.querySelector('.year')

const today = new Date()
const WeekAll = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thursday", "Friday", "Saturday"]
const MonthAll = ["January", "February","March", "April","May", "June","July", "August","September",
"October","November", "December"]

date.innerHTML = today.getDate()
day.innerHTML = WeekAll[today.getDay()]
month.innerHTML = MonthAll[today.getMonth()]
year.innerHTML = today.getFullYear()


let deg = 6
let hr = document.getElementById('hr')
let mn = document.getElementById('mn')
let sc = document.getElementById('sc')

setInterval(() =>{
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotate(${hh + mm / 12}deg)`
    mn.style.transform = `rotate(${mm}deg)`
    sc.style.transform = `rotate(${ss}deg)`
}, 1000)
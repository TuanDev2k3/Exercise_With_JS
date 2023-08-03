let userInput = document.querySelector('#date')
userInput.max = new Date().toISOString().split("T")[0]

function calcAge(){
    let birdth = new Date(userInput.value)
    let d1 = birdth.getDate()
    let m1 = birdth.getMonth() + 1
    let y1 = birdth.getFullYear()

    let today = new Date()
    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3

    y3 = y2 - y1

    if (m2 >= m1)
        m3 = m2 - m1
    else {
        y3--
        m3 = 12 + m2 - m1
    }

    if(d2 >= d1)
        d3 = d2 - d1
    else{
        m3--
        d3 = SoDayInMonth(y1, m1) + d2 - d1
    }
    document.querySelector('.showAge').innerHTML = 
    `You are ${y3} years - ${m3} months - ${d3} days old.`
}

// Dem so DAY trong thang cua nam do
function SoDayInMonth(y, m){
    return new Date(y, m, 0).getDate()
}
document.querySelector('button').addEventListener('click', calcAge)
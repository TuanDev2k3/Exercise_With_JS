let number = document.getElementById('number')
let couter = 0

setInterval(() => {
    if (couter == 65)
        clearInterval()
    else {
        couter += 1
        number.innerHTML = couter + '%'
    }
    
}, 30)
let display = document.querySelector('.screen')

function show(n){
    display.value += n
    display.scrollTo(display.scrollWidth, 0)
}
function delAC(){
    display.value = ""
}
function delDE(){
    display.value = display.value.slice(0, -1)
}
function calc(){
    display.value = eval(display.value)
}
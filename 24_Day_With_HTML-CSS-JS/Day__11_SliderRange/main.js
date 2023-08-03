var range = document.querySelector('.range')
var range_bar = document.querySelector('.range-bar')
var value = document.querySelector('.range-bar span')
var body = document.querySelector('body')

function upDateRange(item) {
    range_bar.style.width = `${item}%`
    value.innerHTML = `${item}%`
    body.style.background = `rgb(0, 0, 0, ${item/100})`
}

range.addEventListener('mousemove', function(e){
    let rangeWidth = e.pageX - this.offsetLeft;
    let percent = Math.round(rangeWidth / this.offsetWidth *100)
    upDateRange(percent)
})
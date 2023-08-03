var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var prev = document.querySelector('#prev')
var pen = document.querySelector('#pen')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var next = document.querySelector('#next')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var pos1 = {
    x: 0,
    y: 0
}
var pos2 = {
    x: 0,
    y: 0
}
var isDraw = false
var colorPaint = '#000'
var size = 2
sizeEl.innerHTML = size
document.addEventListener('mousedown', function (e) {
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDraw = true
})

document.addEventListener('mouseup', function () {
    isDraw = false
})

document.addEventListener('mousemove', function (e) {
    if (isDraw) {
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }

        // Fill net ve
        ctx.beginPath()
        ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI)
        ctx.fillStyle = colorPaint
        ctx.fill()
        // Ve ouline
        ctx.beginPath()
        ctx.moveTo(pos1.x, pos1.y)
        ctx.lineTo(pos2.x, pos2.y)
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = size * 2
        ctx.stroke()

        pos1.x = pos2.x
        pos1.y = pos2.y
    }
})

color.addEventListener('change', function(e){
    colorPaint = e.target.value
})
eraser.addEventListener('click', function(){
    colorPaint = '#fff'
})
pen.addEventListener('click', function(){
    colorPaint = color.value
})
prev.addEventListener('click', function(){
    size -= 2
    size = size > 2 ? size : 2
    sizeEl.innerHTML = size
})
next.addEventListener('click', function(){
    size += 2
    size = size < 30 ? size : 30
    sizeEl.innerHTML = size
})

clear.addEventListener('click', function(){
    ctx.clearRect(0, 0, 1536, 660)
})
save.addEventListener('click', function(){
    // Xoa comment de su dung chuc nang save

    // var output = canvas.toDataURL()
    // save.setAttribute('href', output)
})
var fb = document.querySelector('.facebook h2')
var yt = document.querySelector('.youtube h2')
var tk = document.querySelector('.tiktok h2')

function count(item, time) {
    var count = 0
    var step = Math.round(time/250) // All chay 100 lan ==> time chay = nhau

    let counting = setInterval(function(){
        count += step
        if (count > time) {
            clearInterval(counting)
            item.innerText = time
        }
        else
            item.innerText = count
    }, 1)
}
count(fb, 3300)
count(yt, 1000) 
count(tk, 6200)
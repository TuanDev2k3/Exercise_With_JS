let song = document.querySelector('#song')
let play_pause = document.querySelector('#playPause')
let range = document.querySelector('#input_range')

function playPause(){
    if (play_pause.classList.contains("fa-play")){
        song.play()
        play_pause.classList.add('fa-pause')
        play_pause.classList.remove('fa-play')
    }
    else{
        song.pause()
        play_pause.classList.remove('fa-pause')
        play_pause.classList.add('fa-play')
    }

}

range.addEventListener('input', function(){
    song.currentTime = this.value
})

setInterval(function(){
    range.max = song.duration
    range.value = song.currentTime
}, 500)
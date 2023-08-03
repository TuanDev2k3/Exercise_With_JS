let search = document.getElementById('search')
let status = document.querySelector('.status img')
let temp = document.querySelector('.temp')
let city = document.querySelector('.city')
let humb = document.querySelector('#humb')
let wind = document.querySelector('#wind')
let weather = document.querySelector('.weather')

async function showWeather(value) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=cb8d857e9528680474d1a7a90b239fba`
    let reponse = await fetch(apiURL)

    if (reponse.status == "404") {
        console.clear()
    }
    else {
        let data = await reponse.json()
        temp.innerHTML = Math.round(data.main.temp - 273.15) + `<sup>o</sup>C`
        city.innerHTML = data.name
        wind.innerHTML = Math.round(data.wind.speed * 3.6) + `km/h`
        humb.innerHTML = data.main.humidity + `%`

        if (data.weather[0].main == "Clear")
            status.src = "./img/clear.png"
        else if (data.weather[0].main == "Clouds")
            status.src = "./img/clouds.png"
        else if (data.weather[0].main == "Drizzle")
            status.src = "./img/drizzle.png"
        else if (data.weather[0].main == "Mist")
            status.src = "./img/mist.png"
        else if (data.weather[0].main == "Rain")
            status.src = "./img/rain.png"
        else if (data.weather[0].main == "Snow")
            status.src = "./img/snow.png"
    }
}

search.addEventListener('change', function () {
    let value = search.value.trim()
    showWeather(value)
    search.value = ''
})
showWeather("Bien Hoa")
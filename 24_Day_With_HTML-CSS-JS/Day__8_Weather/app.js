var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var eye = document.querySelector('.eye span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var body = document.querySelector('body');


async function changeWeatherUI(input) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cb8d857e9528680474d1a7a90b239fba`
    let data = await fetch(apiURL).then(res => res.json())

    if (data.cod == 200) {
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        eye.innerHTML = data.visibility + 'm'
        wind.innerHTML = data.wind.speed + 'm/s'
        sun.innerHTML = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerHTML = temp;
        shortDesc.innerHTML = data.weather[0].main
        time.innerHTML = new Date().toLocaleString('vn')

        if (data.weather[0].main === 'Rain')
            body.setAttribute('class', 'rain')
        else if (temp <= 20)
            body.setAttribute('class', 'cold')
        else if (temp <= 26)
            body.setAttribute('class', 'warm')
        else
            body.setAttribute('class', 'hot')
    }
    else {
        // Clear bang console khi nhap sai dia diem
        console.clear();
    }
}
// vi tri mac dinh
changeWeatherUI('Bien Hoa') 

search.addEventListener('keydown', function (e) {
    if (e.code == 'Enter' && search.value.trim() !== '') {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch);
        search.value = ''
    }

})
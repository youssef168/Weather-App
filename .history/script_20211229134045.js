let mainCol = document.getElementById('Special'),
SecCol = document.querySelector('super-x')
let btnLocation = document.querySelector('button')
let WatingMsg = document.querySelector('.wating')
let inputFiled = document.querySelector('input')
let Degree = document.querySelector('.degree')
let PrecentDegrees = document.querySelector('.degree-3')
let Status = document.querySelector('h4')
let weatherIMG = document.querySelector('img')
let Feels = document.querySelector('innerFeild .degree2')
let api;

let APIKEY = 'c191c78554f244c610917b056757a1a6';


btnLocation.addEventListener('click', () => {
    if (navigator.geolocation) { // If Browser Support GeoLocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else {
        alert('Your Browser Not Support GeoLocation API')
    }
})

function onSuccess(position) {
    // const { lat, lon } = position.coords
    // console.log(position.coords.longitude)
    // console.log(lat)
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`;
    fetchApi()
    console.log(lat, lon)
}
function onError(err) {
    WatingMsg.innerHTML = err.message
    WatingMsg.classList.add('activeFaild')
}

inputFiled.addEventListener('keyup', e => {
    if (e.key = 'Enter' && inputFiled.value != '') {
        requestApi(inputFiled.value)
    }
})

function requestApi(City) {
     api = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${APIKEY}`;
    fetchApi()
}

function fetchApi() {
    WatingMsg.innerText = 'Getting Location And Data, Please Wait..'
    WatingMsg.classList.add('active')
    fetch(api).then(res => res.json()).then(results => getWeatherResults(results)).catch(() => {
        WatingMsg.innerText = 'Something went wrong'
        WatingMsg.classList.replace('active', 'activeFeild')
    })
}

function getWeatherResults(info) {
    if(info.cod === '404') {
        WatingMsg.classList.replace('active', 'activeFaild')
        WatingMsg.innerHTML = `${inputFiled.value} Not A Valid City, Try Write That Again`
    } else {
        console.log(info)
        WatingMsg.classList.replace('activeFaild', 'active')
        WatingMsg.innerHTML = `${inputFiled.value} Is A Valid City, Trying Get Data, Wait A Second And You Will Get This`
        mainCol.classList.add('active')

        const cityName = info.name;
        const Country = info.sys.country;
        const { description, id } = info.weather[0]
        const { feels_like, humidity, temp } = info.main

        Degree.innerText = Math.floor(temp)
        PrecentDegrees.innerText = `${humidity}%`
        Status.innerText = `${description}`
        Feels.innerText = `${feels_like}`

        if (id == 802) {
            weatherIMG.src = './icons/clear.svg'
        } else if (id >= 200 && id <=232) {
            weatherIMG.src = './icons/storm.svg'
        } else if (id >= 600 && id <=622) {
            weatherIMG.src = './icons/snow.svg'
        } else if(id >= 701 && id <= 781){
            weatherIMG.src = './icons/clear.svg'
        } else if (id >=801 && id <=804) {
            weatherIMG.src = './icons/cloud.svg'
        } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
            weatherIMG.src = './icons/rain.svg'
        }
    }
}

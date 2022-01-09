let mainCol = document.getElementById('Special'),
SecCol = document.querySelector('super-x')
let btnLocation = document.querySelector('button')
let WatingMsg = document.querySelector('.wating')
let inputFiled = document.querySelector('input')

let weatherIMG = document.querySelector('img')


btnLocation.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else {
        alert('Your Browser Not Support GeoLocation API')
    }
})

function onSuccess(position) {
    const { latitude, longitude } = position.coords
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=your_api_key`;
}
function onError(err) {
    console.log(err)
}

inputFiled.addEventListener('keyup', e => {
    if (e.key = 'Enter' && inputFiled.value != '') {
        requestApi(inputFiled.value)
    }
})

function requestApi(City) {
    let APIKEY = 'c191c78554f244c610917b056757a1a6';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKEY}`;

    WatingMsg.innerText = 'Getting Location And Data, Please Wait..'
    WatingMsg.classList.add('active')
    fetch(api).then(res => res.json()).then(results => getWeatherResults(results))
}


function getWeatherResults(info) {
    if(info.cod === '404') {
        WatingMsg.classList.replace('active', 'activeFaild')
        WatingMsg.innerHTML = `${inputFiled.value} Not A Valid City, Try Write That Again`
    } else {
        WatingMsg.classList.replace('activeFaild', 'active')
        WatingMsg.innerHTML = `${inputFiled.value} Is A Valid City, Trying Get Data, Wait A Second And You Will Get This`

        const cityName = info.name;
        const Country = info.sys.country;
        const { description, id } = info.weather[0]
        const { fell_like, humidity, temp } = info.main

        if (id == 1640727362) {
            weatherIMG.src = './icons/clear.svg'
        }
    }
    console.log(info)
}


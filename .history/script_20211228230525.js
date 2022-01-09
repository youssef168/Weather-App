let mainCol = document.getElementById('Special'),
SecCol = document.querySelector('super-x')
let btn = document.querySelector('button')
let WatingMsg = document.querySelector('.wating')
let inputFiled = document.querySelector('input')


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
    
    }
    console.log(info)
}


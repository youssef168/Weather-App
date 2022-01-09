let mainCol = document.getElementById('Special'),
SecCol = document.querySelector('super-x')
let btn = document.querySelector('button')
let WatingMsg = document.querySelector('.wait')
let FaildMsg = document.querySelector('.faild')
let inputFiled = document.querySelector('input')


inputFiled.addEventListener('keyup', e => {
    if (e.code = 'Enter' && inputFiled.value !== '') {
        requestApi(inputFiled.value)
    }
})

requestApi(City) {
    let APIKEY = 'c191c78554f244c610917b056757a1a6';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${APIKEY}`
    console.log(api)
}



let mainCol = document.getElementById('Special'),
SecCol = document.querySelector('super-x')
let btn = document.querySelector('button')
let WatingMsg = document.querySelector('.wait')
let FaildMsg = document.querySelector('.faild')
let inputFiled = document.querySelector('input')


inputFiled.addEventListener('keyup', e => {
    if(e.key == 'enter' && inputFiled.value != '') {
        console.log("Yes")
    }
})



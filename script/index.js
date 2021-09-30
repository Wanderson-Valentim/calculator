var calculator = document.querySelector('#calculator')
var expression = ''
var number = ''
var numLimitScreen = 17
var expLimitScreen = 38
var finalCharacter = ''
var finaResult = 0
const keys = ['Escape', 'Enter', 'Backspace', '%', '/', '*', '-', '+']

function main(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key
        checkKeys(keyName)})
}

function checkKeys(key){
    let topScreen = document.querySelector('#expression')
    let bottomScreen = document.querySelector('#number')

    if(keys.indexOf(key) == -1){
        numberKeys(key, bottomScreen)
    }
    else{
        otherKeys(key, topScreen, bottomScreen)
    }
}

function numberKeys(key, bottomScreen){
    if(key >= 0 || key <= 9 || key == '.'){
        if(key == '.' && !number.includes('.') && number.length > 0){
            bottomScreen.innerHTML += `${key}`
            number += key
        }
        else if(key != '.'){
            bottomScreen.innerHTML += `${key}`
            number += key
        }
        if(bottomScreen.textContent.length > numLimitScreen){
            adjustText(bottomScreen, numLimitScreen)
        }
    }
}

function otherKeys(key, topScreen, bottomScreen){
    finalCharacter = topScreen.textContent.slice(topScreen.textContent.length - 2).trim()
    if(key == 'Escape'){
        expression = ``
        number = ``
        topScreen.innerHTML = ``
        bottomScreen.innerHTML = ``
    }
    else if(key == 'Enter'){
        result(topScreen, bottomScreen, finalCharacter)
    }
    else if(key == 'Backspace'){
        let screenText = bottomScreen.textContent
        
        bottomScreen.innerHTML = `${screenText.slice(0,screenText.length-1)}`
        number = number.slice(0,number.length-1)

        if(number.length > numLimitScreen){
            bottomScreen.textContent = number
            adjustText(bottomScreen, numLimitScreen)
        }
        else if(number.length == numLimitScreen){
            bottomScreen.textContent = number
        }
    }
    else{
        operations(key, topScreen, bottomScreen, finalCharacter)
    }
    
}

function operations(key, topScreen, bottomScreen, finalCharacter){
    let screen = bottomScreen.textContent

    if(finalCharacter == '%' && key != '%'){
        expression += `${key + ' '}`
        topScreen.innerHTML += `${key + ' '}`
    }
    else{
        if(screen.length > 0 && key == '%'){
            expression += `${number + key + ' '}`
            topScreen.innerHTML += `${number + key + ' '}`
        }
        else if(screen.length > 0 || (keys.slice(4,8).includes(finalCharacter) && screen.length > 0)){
            expression += `${number + ' ' + key + ' '}`
            topScreen.innerHTML += `${number + ' ' + key + ' '}`
        }
        bottomScreen.innerHTML = ``
        number = ``
    }

    if(topScreen.textContent.length > expLimitScreen){
        adjustText(topScreen, expLimitScreen)
    }
}

function result(topScreen, bottomScreen, finalCharacter){
    let screen = bottomScreen.textContent

    if(screen.length == 0 && (keys.slice(4,8).includes(finalCharacter) || finalCharacter == '')){
        bottomScreen.innerHTML = `Invalid Operation`
        setTimeout(() => { bottomScreen.innerHTML = `` }, 1000);
    }
}

function adjustText(screen, numLimit){
    let text = screen.textContent.slice(0, screen.textContent.length - numLimit)
    screen.innerHTML = `${screen.textContent.replace(text, '...')}`
}

var a = document.querySelectorAll('.button')
console.log(a[0].style.active)
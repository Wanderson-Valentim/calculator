var calculator = document.querySelector('#calculator')
var expression = ''
var number = ''
const keys = ['Escape','Enter','Backspace','%','/','*','-','+']

function main(){
    document.addEventListener('keydown', getKey)
}

function getKey(event){
    let topScreen = document.querySelector('#expression')
    let bottomScreen = document.querySelector('#number')
    const keyName = event.key

    if(bottomScreen.textContent.length < 17 && keys.indexOf(keyName) == -1){
        numberKeys(keyName, bottomScreen)
    }
    else if(keys.indexOf(keyName) != -1){
        otherKeys(keyName, topScreen, bottomScreen)
    }
}

function numberKeys(key, bottomScreen){
    if(key >= 0 || key <= 9 || key == '.'){
        let screenText = bottomScreen.textContent

        if(key == '.' && !screenText.includes('.') && screenText.length > 0){
            bottomScreen.innerHTML += `${key}`
            number += key
        }
        else if(key != '.'){
            bottomScreen.innerHTML += `${key}`
            number += key
        }
    }
}

function otherKeys(key, topScreen, bottomScreen){
    if(key == 'Escape'){
        expression = ``
        topScreen.innerHTML = ``
        bottomScreen.innerHTML = ``
    }
    else if(key == 'Enter'){
        
    }
    else if(key == 'Backspace'){
        let screenText = bottomScreen.textContent
        bottomScreen.innerHTML = `${screenText.slice(0,screenText.length-1)}`
        number = number.slice(0,number.length-1)
    }
    else{
        operations(key, topScreen, bottomScreen)
    }
    console.log(number)
}

function operations(key, topScreen, bottomScreen){
    let finalCharacter = topScreen.textContent.slice(topScreen.textContent.length-1)
    
    if(bottomScreen.textContent.length > 0 && finalCharacter.length == 0){
        expression += `${number + '' +key}`
        topScreen.innerHTML += `${bottomScreen.textContent + '' +key}`
        bottomScreen.innerHTML = ``
        number = ``
    }
    else if(keys.includes(finalCharacter) && bottomScreen.textContent.length > 0){
        expression += `${number + '' +key}`
        topScreen.innerHTML += `${bottomScreen.textContent + '' +key}`
        bottomScreen.innerHTML = ``
        number = ``
    }
    
    if(topScreen.textContent.length > 49){
        adjustText(topScreen, 49)
    }
    console.log(expression)
}

function adjustText(screen, limitNum){
    let text = screen.textContent.slice(0,screen.textContent.length-limitNum)
    screen.innerHTML = `${screen.textContent.replace(text,'...')}`
}
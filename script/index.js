var calculator = document.querySelector('#calculator')
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
    else{
        otherKeys(keyName, topScreen, bottomScreen)
    }
}

function numberKeys(key, bottomScreen){
    if(key >= 0 || key <= 9 || key == '.'){
        let screenText = bottomScreen.textContent

        if(key == '.' && !screenText.includes('.') && screenText.length > 0){
            bottomScreen.innerHTML += `${key}`
        }
        else if(key != '.'){
            bottomScreen.innerHTML += `${key}`
        }
    }
}

function otherKeys(key, topScreen, bottomScreen){
    console.log(key)
    if(key == 'Escape'){
        topScreen.innerHTML = ``
        bottomScreen.innerHTML = ``
    }
    else if(key == 'Enter'){
        
    }
    else if(key == 'Backspace'){
        let screenText = bottomScreen.textContent
        bottomScreen.innerHTML = `${screenText.slice(0,screenText.length-1)}`
    }
    else{
        //let text = 
        topScreen.innerHTML += `${bottomScreen.textContent + '' +key}`
        bottomScreen.innerHTML = ``
    }
}
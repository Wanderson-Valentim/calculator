var calculator = document.querySelector('#calculator')
const keys = ['Escape','Enter','Backspace','%','/','*','-','+']

function main(){
    document.addEventListener('keydown', getKey)
}

function getKey(event){
    let topScreen = document.querySelector('#expression')
    let bottomScreen = document.querySelector('#number')
    const keyName = event.key

    if(bottomScreen.textContent.length < 17){
        if(keyName >= 0 || keyName <= 9 || keyName == '.'){
            if(keyName == '.' && !bottomScreen.textContent.includes('.') && bottomScreen.textContent.length > 0){
                bottomScreen.innerHTML += `${keyName}`
            }
            else if(keyName != '.'){
                bottomScreen.innerHTML += `${keyName}`
            }
        }
    if(keys.indexOf(keyName) != -1){
        if(keyName == 'Escape'){
            //topScreen.innerHTML = ``
            bottomScreen.innerHTML = ''
        }
        else if(keyName == 'Enter'){

        }
        else if(keyName == 'Backspace'){

        }
        else{

        }
    }
    }
    //console.log(screen.textContent.length)
}
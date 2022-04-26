var functionalities = ['Backspace', 'Enter', 'Escape']

var operations = {
    'multiplication': '*',
    'subtraction': '-',
    'percentage': '%',
    'division': '/',
    'sum': '+'
}

const calculator = document.querySelector('body')

const buttons = document.querySelectorAll('.button')

calculator.addEventListener('keydown', (event) => {
    writeOnScreen(event.key, operations, functionalities)
})

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        writeOnScreen(event.target.name, operations, functionalities)
    })
})

function isScreenElement(element, operations){
    let validator = false
    //Atenção ao ''
    let isNumber = element >= 0 && element <=9

    if (isNumber){
        validator = true
    }
    else{
        if(operations.hasOwnProperty(element)){
            validator = checkElementInObject(element, operations)
        }
    }

    return validator
}

function checkElementInObject(element, object){
    validator = false

    for (value in object){
        if(element === object[value]) validator = true
    }

    return validator
}

function writeOnScreen(element, operations, functionalities){
    let isScreen = isScreenElement(element, operations)

    if (isScreen){
        writeOnElementsScreen(element)
    }
    else{
        //let isFunctionality = functionalities.indexOf('element')
    }
}

function writeOnElementsScreen(event){
    console.log(event)
    const elementsScreen = document.querySelector('.elements')
}

function writeOnExpressionScreen(){
    const elementsScreen = document.querySelector('.expression')
}
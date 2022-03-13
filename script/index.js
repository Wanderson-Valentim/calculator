var keys = {
    'Backspace': 'erase',
    'Enter': 'equal',
    'Escape': 'clear',
    '%': 'percentage',
    '*': 'multiplication',
    '+': 'sum',
    '-': 'subtraction',
    '/': 'division'
}

const calculator = document.querySelector('body')

const buttons = document.querySelector('#calculator-buttons')

calculator.addEventListener('keydown', (event) => {
    const screen = document.querySelector('.elements')

    if(keys[event.key]){
        console.log(keys[event.key])
    }
    else{
        console.log(event.key)
    }
})

buttons.addEventListener('click', (event) => {
    a = event.target
    console.log(a.name)
})
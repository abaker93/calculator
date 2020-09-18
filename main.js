let displayValue = '0';
let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

const updateDisplay = () => {
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
  
updateDisplay();

const clickButton = () => {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
                clearDisplay();
                updateDisplay();
        }
    )}
}

clickButton();

const inputOperand = operand => {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            //1st click - handles first operand input
            displayValue = operand;
        } else if(displayValue === firstNum) {
            //starts new operation after inputEquals()
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        //3rd/5th click - inputs to secondNum
        if(displayValue === firstNum) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

const inputOperator = operator => {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        secondOperator = operator;
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        //6th click - new secondOperator
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstNum = displayValue;
        result = null;
    } else { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstNum = displayValue;
    }
}

const inputEquals = () => {
    //hitting equals doesn't display undefined before operate()
    if(firstOperator === null) {
        displayValue = displayValue;
    } else if(secondOperator != null) {
        //handles final result
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), secondOperator);
        if(result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstNum = displayValue;
            secondNum = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        //handles first operation
        secondNum = displayValue;
        result = operate(Number(firstNum), Number(secondNum), firstOperator);
        if(result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstNum = displayValue;
            secondNum = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

const clearDisplay = () => {
    displayValue = '0';
    firstNum = null;
    secondNum = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

const operate = (x, y, op) => {
    if(op === '+') return x + y;
    if(op === '-') return x - y;
    if(op === '*') return x * y;
    if(op === '/') {
        if(y === 0) {
            return 'lmao';
        } else {
        	return x / y;
        }
    }
}

const roundAccurately = (num, places) => {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
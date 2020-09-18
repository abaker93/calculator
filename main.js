let displayValue = '0';
let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
const buttons = document.querySelectorAll('button');
console.log(buttons);

const add = (x, y) => { return x + y; }
const subtract = (x, y) => { return x - y; }
const multiply = (x, y) => { return x * y; }
const divide = (x, y) => { return x / y; }

const operate = (x, y, operator) => {
	if (operator === 'add'){
		return add(x, y);
	} else if (operator === 'subtract') {
		return subtract(x, y);
	} else if (operator === 'multiply') {
        return multiply(x, y);
    } else if (operator === 'divide') {
        return divide(x, y);
    }
}

const updateDisplay = () => {
	const display = document.getElementById('display');
	display.innerText = displayValue;
}

updateDisplay();

const clickButton = () => {
	for (let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			if (buttons[i].classList.contains('btn-num')) {
				inputNum(buttons[i].value);
				updateDisplay();
				console.log(displayValue);
			}
		})
	}
}

const inputNum = num => {
	if (firstNum === null) {
		if (displayValue === '0' || displayValue === 0) {
			displayValue = num;
		} else if (displayValue === firstNum) {
			displayValue = num;
		} else {
			displayValue += num;
		}
	} else {
		if (displayValue === firstNum) {
			displayValue = num;
		} else {
			displayValue += num;
		}
	}
}

clickButton();
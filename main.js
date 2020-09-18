const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', clickButton()));

const add = (x, y) => { return x + y; }
const subtract = (x, y) => { return x - y; }
const multiply = (x, y) => { return x * y; }
const divide = (x, y) => { return x / y; }

const operate = (x, y, operator) => {
	if (operator === '+'){
		return add(x, y);
	} else if (operator === '-') {
		return subtract(x, y);
	} else if (operator === '*') {
        return multiply(x, y);
    } else if (operator === '/') {
        return divide(x, y);
    }
}

const clickButton = () => {
	for (let i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			switch (buttons[i].classList.contains(this)) {
				case 'btn-num':
					updateDisplay((display.textContent == 0) ? this.textContent : display.textContent + this.textContent);
					break;
			}
		})
	}
	switch (buttons.value)
}
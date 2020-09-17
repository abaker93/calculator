const add = (x, y) => {
	return x + y;
}

const subtract = (x, y) => {
	return x - y;
}

const multiply = (x, y) => {
	return x * y;
}

const divide = (x, y) => {
	return x / y;
}

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
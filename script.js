//BASIC MATH OPERATORS

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, num1, num2) {
    return operator(num1, num2);
};

function updateDisplay() {
    let display = document.querySelector('.display');
    display.textContent = currentDisplay;
};

function clearDisplay() {
    currentDisplay = '';
};

function resetDots() {
    dots = '';
};

function setCurrentNumberInput(setTo) {
    currentNumberInput = setTo;
}

function setPreviousNumberInput(setTo) {
    previousNumberInput = setTo;
}

function resetPreviousNumberInput() {
    previousNumberInput = '';
}

function resetCurrentNumberInput() {
    currentNumberInput = '';
}

function resetCalcOperation() {
    calcOperation = '';
}

function calculate() {
    if (previousNumberInput !== '' && currentNumberInput !== '') {
        result = operate(calcOperation, Number(previousNumberInput), Number(currentNumberInput));
        return result;
    };
};

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]');
const dot = document.querySelector('[data-dot]');

let currentDisplay = '';
let previousNumberInput = '';
let currentNumberInput = '';
let calcOperation = null;
let dots = '';
let result = null;

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        currentDisplay += button.textContent;
        setCurrentNumberInput(currentDisplay);
        updateDisplay();
    });
});

clear.addEventListener('click', () => {
    clearDisplay()
    updateDisplay()
    resetPreviousNumberInput()
    resetCurrentNumberInput()
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {     
        if (operator.textContent === '+') {
            calcOperation = add;
        } else if (operator.textContent === '-') {
            calcOperation = subtract;
        } else if (operator.textContent === 'x') {
            calcOperation = multiply;
        } else if (operator.textContent === '/') {
            calcOperation = divide;
        }
        setPreviousNumberInput(currentNumberInput);
        clearDisplay();
    });
});

equals.addEventListener('click', () => {
    result = operate(calcOperation, Number(previousNumberInput), Number(currentNumberInput));
    currentDisplay = result;
    updateDisplay();
    setPreviousNumberInput(result);
});

dot.addEventListener('click', () => {
    if (dots.length === 0) {
        currentDisplay += dot.textContent;
        dots += dot.textContent;
        updateDisplay()
    }
    console.log(dot);
});
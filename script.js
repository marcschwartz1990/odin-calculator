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

const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]')

let currentDisplay = '';
let previousNumberInput = '';
let currentNumberInput = '';
let calcOperation = null

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button);
        currentDisplay += button.textContent;
        currentNumberInput = currentDisplay;
        updateDisplay();
    });
});

clear.addEventListener('click', () => {
    console.log(clear);
    clearDisplay()
    updateDisplay()
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        console.log(operator);
        previousNumberInput = currentNumberInput;
        if (operator.textContent === '+') {
            calcOperation = add;
        } else if (operator.textContent === '-') {
            calcOperation = subtract;
        } else if (operator.textContent === 'x') {
            calcOperation = multiply;
        } else if (operator.textContent === '/') {
            calcOperation = divide;
        }
        clearDisplay();
    });
});

equals.addEventListener('click', () => {
    console.log(equals);
    let total = operate(calcOperation, Number(previousNumberInput), Number(currentNumberInput));
    currentDisplay = total;
    currentNumberInput = currentDisplay;
    updateDisplay()
    console.log(`total: ${total}`)
    calcOperation = '';
});
///// Create user interface

///
const numButtons = ["1","2","3","4","5","6","7","8","9",".","0","Clear"]

/// Create number buttons
for(let i = 0; i < numButtons.length; i++){
    const buttNum = document.createElement('button');
    buttNum.setAttribute('id', "button" + numButtons[i]);
    buttNum.setAttribute('class', "numButton");
    buttNum.setAttribute('style', "width:70px;height:70px;background-color:grey;border-radius:15px");
    buttNum.textContent = numButtons[i];
    const numberButtons = document.getElementById('numButtons');
    if (numberButtons) {
        numberButtons.appendChild(buttNum);
    } else {
        console.error('Element with ID "numButtons" not found.');
    }
}

// Create operator buttons
const operateButton = ["+","-","x","/","="];

for(let i = 0; i < operateButton.length; i++){
    const buttOp = document.createElement('button');
    let name = "button" + operateButton[i];
    buttOp.setAttribute('class', "operatorButton");
    buttOp.setAttribute('id', name);
    buttOp.textContent = operateButton[i];
    buttOp.setAttribute('style', "width:70px;height:70px;background-color:grey;border-radius:15px;strength: 2px;");
    const operatorButtons = document.getElementById('operatorButtons');
    if (operatorButtons) {
        operatorButtons.appendChild(buttOp);
    } else {
        console.error('Element with ID "operatorButtons" not found.');
    }
}

////////////////////////////////////////////////////////////////////////
///// Calculations 
// Create initial calculation variable
let currentNum = 0;
let prevNum;

// Create variables for display
let numberOne = [];
let numberTwo = [];
let operator = [];

// Define calculation functions
const addCalc = function (numOne,numTwo){
    return numOne + numTwo;
}

const minusCalc = function (numOne,numTwo){
    return numOne - numTwo;
}

const productCalc = function (numOne,numTwo){
    return numOne * numTwo;
}

const divideCalc = function (numOne,numTwo){
    return numOne/numTwo;
}

// Create operate function
const operate = function(numOne,operator,numTwo){
    prevNum = currentNum; // sets earlier value as previous in memory;
    if (operator == "+"){
        currentNum = addCalc(numOne,numTwo);
    }
    else if (operator == "-"){
        currentNum = minusCalc(numOne,numTwo);
    }
    else if (operator == "x"){
        currentNum = productCalc(numOne,numTwo);
    }
    else if (operator == "/"){
        currentNum = divideCalc(numOne,numTwo);
    }
    return currentNum;
}

// Receive number input and populate display with initial number

/// Add event listener to number buttons
const numButton = document.querySelectorAll('.numButton');
numButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id === 'buttonClear') {
            numberOne = [];
            numberTwo = [];
            operator = [];
            document.getElementById('inputDisplay').innerHTML = '';
            document.getElementById('outputDisplay').innerHTML = '';
        } else if (numberOne.length > 0 && operator.length === 0) {
            numberOne.push(button.textContent);
        } else if (operator.length > 0) {
            numberTwo.push(button.textContent);
        } else {
            numberOne.push(button.textContent);
        }
        document.getElementById('inputDisplay').innerHTML = numberOne.join('') + " " + operator + " " + numberTwo.join('');
    });
});

// Receive operator input and populate display 
const operatorButton = document.querySelectorAll('.operatorButton');
operatorButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.textContent === "=") {
            const numOne = parseFloat(numberOne.join(''));
            const numTwo = parseFloat(numberTwo.join(''));
            const output = operate(numOne, operator, numTwo);
            document.getElementById('outputDisplay').innerHTML = output;
            numberOne = [output.toString()];
            numberTwo = [];
            operator = [];
        } else {
            operator = button.textContent;
            document.getElementById('inputDisplay').innerHTML = numberOne.join('') + " " + operator + " " + numberTwo.join('');
        }
    });
});
// Add event listener for keystrokes matching the text content of the buttons, and trigger equivalent events to the listeners above
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (numButtons.includes(key)) {
        document.getElementById('button' + key).click();
    } else if (operateButton.includes(key)) {
        document.getElementById('button' + key).click();
    } else if (key === 'Enter') {
        document.getElementById('button=').click();
    } else if (key === '*') {
        document.getElementById('buttonx').click();
    } else if (key === 'Delete') {
        document.getElementById('buttonClear').click();
    }
});

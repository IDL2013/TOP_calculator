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
const operateButton = ["+","-","*","/","="];

for(let i = 0; i < operateButton.length; i++){
    const buttOp = document.createElement('button');
    let name = "button" + operateButton[i];
    buttOp.setAttribute('name', name);
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
    if (operator == "plus"){
        currentNum = addCalc(numOne,numTwo);
    }
    else if (operator == "minus"){
        currentNum = minusCalc(numOne,numTwo);
    }
    else if (operator == "multiply"){
        currentNum = productCalc(numOne,numTwo);
    }
    else if (operator == "divide"){
        currentNum = divideCalc(numOne,numTwo);
    }
    return currentNum;
}

// Receive number input and populate display with initial number

/// Add event listener to number buttons
const numButton = document.querySelectorAll('.numButton');

numButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        numberOne.push(button.textContent)
        document.getElementById('inputDisplay').innerHTML = numberOne.join('');
    });
});

// Receive operator input and populate display 

// Populate display with second number

// Listen for "equals" button click and run operate function


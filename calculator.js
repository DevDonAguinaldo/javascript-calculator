// JavaScript for calculator

// variables
var display = document.getElementById("display"); // display element
var operands = [];                                // operands array
var operator = '';                                // operator character
var results = 0.0;                                // result number

// function to change display
function changeDisplayValue(e) {
    let num = e.innerHTML; // make variable of the value
    display.innerHTML += num; // change display
}

// clears the screen
function clearDisplay() {
    display.innerHTML = null;    
}

// empties array
function empty(arr) {
    arr.length = 0;
}

// adds the numbers in the array
function add() {
    let num = parseFloat(display.innerHTML); // get current value in display
    operands.push(num); // first operand
    operator = '+'; // push the + operand
    clearDisplay(); // clear the display for next number
}

// subtracts the numbers in the array
function subtract() {
    let num = parseFloat(display.innerHTML); // get current value in display
    operands.push(num); // first operand
    operator = '-'; // push the - operand
    clearDisplay(); // clear the display for next number
}

// multiplies the numbers in the array
function multiply() {
    let num = parseFloat(display.innerHTML); // get current value in display
    operands.push(num); // first operand
    operator = '*'; // push the * operand
    clearDisplay(); // clear the display for next number
}

// divides the numbers in the array
function divide() {
    let num = parseFloat(display.innerHTML); // get current value in display
    operands.push(num); // first operand
    operator = '/'; // push the / operand
    clearDisplay(); // clear the display for next number
}

// gets remainder of a number
function remainder() {
    let num = parseFloat(display.innerHTML); // get current value in display
    operands.push(num); // first operand
    operator = '%'; // push the % operand
    clearDisplay(); // clear the display for next number
}

// adds a decimal point to the number on display
function decimal() {
    display.innerHTML += '.';
}

// changes the sign of the current number
function posneg() {
    display.innerHTML *= -1; 
}

// calculates the two numbers in the array depending on the operator
function calculate() {
    // check to see if there is another number to operate on
    let num = display.innerHTML; // gets the current number on the display

    // if the display is empty then display operand in the array
    if (num == '') {
        console.log(operands[0]);        // logs current number
        display.innerHTML = operands[0]; // displays current number
        empty(operands);                 // empties the array
    }
    else if (operands.length == 0) {
        console.log(num);        // logs current number
        display.innerHTML = num; // displays current number
    }
    else {
        operands.push(parseFloat(num)); // second operand
        // evaluate the two numbers
        switch (operator) {
            case '+':
                results = operands[0] + operands[1]; // computation
                display.innerHTML = results;         // display the results
                empty(operands);                     // clear the array
                break;
            case '-':
                results = operands[0] - operands[1]; // computation
                display.innerHTML = results;         // display the results
                empty(operands);                     // clear the array
                break;
            case '*':
                results = operands[0] * operands[1]; // computation
                display.innerHTML = results;         // display the results
                empty(operands);                     // clear the array
                break;
            case '/':
                results = operands[0] / operands[1]; // computation
                display.innerHTML = results;         // display the results
                empty(operands);                     // clear the array
                break;
            case '%':
                results = operands[0] % operands[1]; // computation
                display.innerHTML = results;         // display the results
                empty(operands);                     // clear the array
            default:
                break;
        }
    }
}


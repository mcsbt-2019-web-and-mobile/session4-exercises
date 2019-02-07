"use strict";

// Create a function operate, that receives an operation and two numbers as parameters.
// Then call this function with different numbers and operations.

/*
function sum(a, b) {
    return a + b;
}
 */
let sum = (a, b) => a + b;
let multiply = (a, b) => a * b;

function operate(op, a, b) {
    return op(a, b);
}

console.log(`the sum of ${a} and ${b} is ` + operate(sum, 3, 4));
console.log(operate(multiply, 6, 3));
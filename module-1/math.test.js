let num1 = 20;
let num2 = 10;

if (add(num1,num2) != 30) {
    throw Error;
}
function add(num1,num2) {
    return num1 + num2;
}

if (subtract(num1,num2) != 10) {
    throw Error('Subtract did not work')
}
function subtract(num1,num2) {
    return num1 - num2;
}

if (divide(num1,num2) != 2) {
    throw Error('Divide did not work')
}
function divide(num1,num2) {
    return num1 / num2;
}

if (multiply(num1,num2) != 200) {
    throw Error('Multiply did not work')
}
function multiply(num1,num2) {
    return num1 * num2;
}

function sayHello(name) {
    const greeting = "hello";
    const greetingText = greeting + " " + name;
    return greetingText
}

console.log(20+10);
console.log(20-10);
console.log(20/10);
console.log(20*10);
console.log(sayHello('Samuel'));

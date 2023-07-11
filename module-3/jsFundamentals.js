// Module 3 Lab 1 jsFundamentals

// Exercise 1
console.log(" " + 1 + 0)
//10
console.log(" " - 1 + 0)
//-1
console.log(true +false)
//1
console.log(6 / "3")
//2
console.log("2" * "3")
//6
console.log(4 + 5 + "px")
//9px
console.log("$" + 4 + 5)
//$45
console.log("4" - 2)
//2
console.log("4px" - 2)
//NaN
console.log(" -9 " + 5)
//-9 5
console.log(" -9 " - 5)
//-14
console.log(null + 1)
//1
console.log(undefined + 1)
//NaN
console.log(undefined == null)
//true
console.log(undefined === null)
//false
console.log(" /t /n" - 2)
//NaN



// Exersise 2



//Exersise 3
if (0) console.log('#1 zero is true')
//Will not print
if ("0") console.log('#2 zero is true')
//Will print bc a string is true
if (null) console.log('null is true')
//Will not print
if (-1) console.log('negative is true')
//Will print bc non-zero numbers are true
if (1) console.log('positive is true')
//Will print bc non-zero numbers are true



//Exersise 4
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {                   //original function
result += 'less than 10';
} else {
result += 'greater than 10';
}                                   //end of original function
let result2 = (a + b < 10) ? result += ' less than 10' : result += ' greater than 10';
console.log(result);
console.log(result2);           //Both return same values
// += is short hand to add a value to a variable and make it the new value of the variable



//Exersise 5
function getGreeting(name) {
    return 'Hello ' + name + '!';
    }
const getGreeting = function(name) {
    return 'Hello ' + name + '!'
}
const getGreeting = name => 'Hello ' + name + '!';



//Exersise 6
const westley = {
    name: 'Westley',
    numFingers: 5
    }
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person) {
        if (person.numFingers == 6) {
            return 'You killed my father. Prepare to die.'
        } else {
        return 'Nice to meet you.';
        }
    }
}
    inigo.greeting(westley)
    inigo.greeting(rugen)

//Exersise 7
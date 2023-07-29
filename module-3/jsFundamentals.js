// Module 3 Lab 1 jsFundamentals

// Exercise 1
console.log(" " + 1 + 0)   //10
console.log(" " - 1 + 0)   //-1
console.log(true +false)   //1
console.log(6 / "3")       //2
console.log("2" * "3")     //6
console.log(4 + 5 + "px")  //9px
console.log("$" + 4 + 5)   //$45
console.log("4" - 2)       //2
console.log("4px" - 2)     //NaN
console.log(" -9 " + 5)    //-9 5
console.log(" -9 " - 5)     //-14
console.log(null + 1)      //1
console.log(undefined + 1)  //NaN
console.log(undefined == null)  //true
console.log(undefined === null)  //false
console.log(" /t /n" - 2)       //NaN


// Exersise 2
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four


//Exersise 3
if (0) console.log('#1 zero is true')  //Will not print
if ("0") console.log('#2 zero is true')  //Will print bc a string is true
if (null) console.log('null is true')  //Will not print
if (-1) console.log('negative is true')   //Will print bc non-zero numbers are true
if (1) console.log('positive is true')   //Will print bc non-zero numbers are true


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
    const getCatchPhrase = person => person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you',
//    getCatchPhrase(person) {
//        if (person.numFingers == 6) {
//            return 'You killed my father. Prepare to die.'
//        } else {
//        return 'Nice to meet you.';
//        }
//    }
}
inigo.greeting(westley)
inigo.greeting(rugen)

//Exersise 7
const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score +fouls);
    return this;
    },
    fullTime() {
        console.log('Final score is ' + this.score);
        return this;
    },
    foulNum() {
        this.foul++;
        return this;
    },
    halfTimeFoul() {
        console.log('Halftime fouls are ' + this.foul);
        return this;
    },
    fullTimeFoul() {
        console.log('Final number of fouls are ' + this.foul);
        return this;
    }
}
 
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().
    halfTime().fullTime().foulNum().foulNum().halfTimeFoul().fullTimeFoul();


//Exersise 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
const newOrleans = {
    name: 'New Orleans',
    population: 376_971,
    state: 'Louisiana',
    founded: '1718',
    timezone: 'Central Daylight Time'
}
for (let key in sydney) {
    console.log(key + ' ' + sydney[key]);
}
for (let key in newOrleans) {
    console.log(key + ' ' + newOrleans[key]);
}


//Exersice 9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let moreSports = [...teamSports];
moreSports.push('Baseball') + moreSports.unshift('Soccer');
let dog2 = dog1;
dog2 = 'Honey';
let cat2 = {...cat1};
cat2.name = 'Kitty';
console.log(teamSports);
console.log(dog1);
console.log(cat1);

//Exersise 10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive =  () => (age > 15) ? 'Yay you can drive!' : 'Cant drive yet!';
    console.log(this.canDrive);
    }
let person1 = new Person('Ben',20)
let person2 = new Person('Tom',22)
console.log(person1)
console.log(person2)
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive = () => (age > 15) ? 'Yay you can drive!' : 'Cant drive yet!';
        console.log(this.canDrive);
    }
}
let person3 = new PersonClass('Larry', 15)
console.log(person3)

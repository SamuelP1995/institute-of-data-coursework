//Module 3 Lab 3 jsAdvanced

//Exersice 1
function makeCounter(startsFrom, incrementBy) {
    let currentCount = startsFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
    return currentCount;
    };
    }
let counter1 = makeCounter();
let counter2 = makeCounter();
counter1(); 
counter1(); 
counter2();


//Exersice 2
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')
let cancledTime = setTimeout(delayMsg, 10_000, '#5: Delay by 10s');
clearTimeout(cancledTime);
//a) #4,3,2,1: the varible after delayMsg is the number of millisec it will be delayed


//Exersice 3
function debounce(oriFunc,ms) {
     let timeOutId ;
    return function() {
        clearTimeout(timeOutId)
        timeOutId= setTimeout(oriFunc, ms)
    }
}
function printMe(msg) {
    console.log('printing debounced message' + msg)
    }
printMe = debounce(printMe); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - 
//only the LAST one should print, after1000ms of no calls
setTimeout( printMe, 100);
setTimeout( printMe, 200);
setTimeout( printMe, 300);


//Exersice 4
function fibonacci() {
    let n1 = 0; n2 = 1; nextTerm;
    for (let i = 1; i <= 50; i++)
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
let printFinbonacci = setInterval( () => console.log(fibonacci), 1_000)
setTimeout ( () => clearInterval(printFinbonacci), 10_000)


//Exersice 5
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description();
const boundDescritption = car.description.bind(car)
setTimeout (boundDescritption, 200);
setTimeout( () => car.description, 200);
let car2 = {... car};
car2.year = 1989;
let car3 = {...car};
car.make = "Ford";


//Exercise 6


//Exercise 7
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    console.log(`${this.name} ${this.age} ${this.gender}`)
}
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
    console.log(`I am ${this.name}, ${this.age}, ${this.gender}, and I am a ${this.cohort}`)
}
const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Michael Jackson', 62, 'male')
const student1 = new Student('Harry Potter', 17, 'male', 'Griffendor')
const student2 = new Student('Peony Charmander', 17, 'male', 'Hufflepuff')
console.log('person1: '+person1)
console.log(person1)
console.log(person2)

//Exersice 8
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
        date.getSeconds()];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}
class PrescisionClock extends DigitalClock {
    construtor(prefix, precision) {
        super(prefix);
        this.precision = precision;
    }
}
class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime) {
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
}
const myClock = new DigitalClock('my clock:')
myClock.start()


//Exersice 9
function randomDelay() {
    const randomSec = Math.floor(Math.random() * 20_000) + 1_000;
    if (randomSec % 2 == 0) {
        return new Promise((resolve, reject) => {// your code
            setTimeout(() => {
                resolve(randomSec);
            }, randomSec);
            reject;
        });
    } else reject('Error');
}
randomDelay().then(() => console.log(`There appears to have been a delay. Delay value = ${randomSec}`));
randomDelay().catch(() => console.log(`Rejected promis caught. Delay value = ${randomSec}`));


//Exersice 10
//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
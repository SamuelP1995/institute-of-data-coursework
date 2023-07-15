//Module 3 lab 2 jsIntermediate

//Exercise 1
let lowerCase1 = "los angeles";
let lowerCase2 = "every first leter should be capitalized";
let lowerCase3 = "i aM a hARd ONE";
function upperCase(str) {
    return str.replace(/\b\w/g,function(match){  //\b represents a word boundry,
        return match.toUpperCase();              //\w matches any word character
    });                                // /g flag ensures all occurences are replaced
}
let capitalizedSentence1 = upperCase(lowerCase1);
let capitalizedSentence2 = upperCase(lowerCase2);
let capitalizedSentence3 = upperCase(lowerCase3); 
console.log(capitalizedSentence1);
console.log(capitalizedSentence2);
console.log(capitalizedSentence3);


//Exercise 2
function truncate(sentence, maxLength) {
    if (sentence.length <= maxLength){
        return sentence;
    } return sentence.substring(0,maxLength).trim() + "...";
}
console.log(truncate('This text will be truncated if it is too long', 25))

//Exercise 3
const animals = ['Tiger', 'Giraffe']
animals.push("Bear", "Lion")
console.log(animals)
animals.unshift("Elephant", "Bull")
console.log(animals)
console.log(animals.sort())
newValue = "Bananas";
function replaceMiddleValue(animals, newValue){
    const middleValue = Math.floor(animals.length / 2);
    animals.splice(middleValue, 1, newValue);
    return animals;
} console.log(replaceMiddleValue(animals, newValue))


//Exersice 4


//Exersice 5


//Exersice 6
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const unique 
console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


//Exersice 7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
let getBookTitle = books.find(book => book.id == 1)

let getOldBooks = books.filter(book => book.year < 1950)

const addGenre = [...books].forEach(book) => books.set(genre: "Classic");


//Exersice 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
const phoneBookDEF = new Map()
phoneBookDEF.set('David', '3372012018')
phoneBookDEF.set('Evan', '3372091844')
phoneBookDEF.set('Frank', '3372084018')
phoneBookABC.set('Caroline', '3372073099')
function printPhoneBook(map){
    map.forEach((name, number) => {
        console.log(name, number);
    });
}
const phoneBook = new Map()
phoneBook.set(...phoneBookABC)
phoneBook.set(...phoneBookDEF)
console.log(phoneBook)

//Exersice 9
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
    const sumSalaries = salaries.reduce(currentTotal, currentSalary) => currentTotal + currentSalary.

//Exersice 10
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(today.getMinutes() + ' minutes have passed so far today')
console.log(today.getSeconds() + ' seconds have passed so far today')
const birthDay = new Date('1995-04-20')
console.log('I am' + birthDay.getFullYear + 'years, ' + birthDay.getMonth
     + 'months and ' + birthDay.getDay + 'days old')
const daysInBetween = (today, birthDay) => today - birthDay;

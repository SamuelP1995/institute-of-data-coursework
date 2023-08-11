

//import moment from 'moment';
const moment = require('moment');
moment().format();

let today = moment();
const birthDay = moment('1995-04-20');
let age = today.diff(birthDay, 'days');

console.log(`Number of days between today and my birthday: ${age}`);

let dateDiff = moment.duration(today.diff(age));
const years = dateDiff.years();
const months = dateDiff.months();
const days = dateDiff.days();

console.log(`${years} years ${months} months and ${days} days`);

const date1 = moment();
const date2 = moment();
const diff1 = Math.abs(today.diff(date1));
const diff2 = Math.abs(today.diff(date2));
const closestDate = diff1 < diff2 ? date1 : date2;
console.log(closestDate);

let londonTme = moment().tz('Europe/London').format('h:mm:ss a z');
console.log(`current time in London is ${londonTme}`);
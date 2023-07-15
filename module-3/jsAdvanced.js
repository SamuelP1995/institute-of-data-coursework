//Module 3 Lab 3 jsAdvanced

//Exersice 1
function makeCounter(startsFrom) {
    let currentCount = startsFrom;
    return function(incrementBy) {
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
//function delayMsg(msg)
//{
//console.log(`This message will be printed after a delay: ${msg}`)
//}
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
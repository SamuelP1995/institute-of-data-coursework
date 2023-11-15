
const Calculator = require('../libraries/calculator')
// const Logger = require('../libraries/logger')
const myCalc = new Calculator()

const addNumbers = (req, res) => {
    const {num1, num2} = req.query;
    const total = myCalc.addNum(num1,num2);
   
    res.status(200);
    res.json({result: total});
}
const subtractNumbers = (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = myCalc.subtractNum(num1,num2);

    res.status(200);
    res.json({result});
    
}
const multiplyNumbers = (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = myCalc.multiplyNum(num1,num2);

    res.status(200);
    res.json({result});
    
}
const divideNumbers = (req, res) =>{
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = myCalc.divideNum(num1,num2);

    res.status(200);
    res.json({result});
}

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}
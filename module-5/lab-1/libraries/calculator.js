
class Calculator {
    addNum(num1,num2){
        return parseInt(num1) + parseInt(num2);
    } 
    subtractNum(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    multiplyNum(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
    divideNum(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
}

module.exports = Calculator
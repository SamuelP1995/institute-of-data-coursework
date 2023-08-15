const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController.js');


router.get('/', (req,res) => {
    res.send('Help!');
})

router.get('/add', (req,res) => {
    calculatorController.addNumbers(req,res)
})

router.get("/subtract/:num1/:num2", (req,res) => {
     calculatorController.subtractNumbers(req,res)
})

router.post('/multiply', (req,res) => {
     calculatorController.multiplyNumbers(req,res)
})

router.post('/divide', (req,res) => {
     calculatorController.divideNumbers(req,res)
})

module.exports = router;
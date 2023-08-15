
const express = require('express')
const testRoute = require('./routes/myTestRoutes');
const calculatorRoute = require('./routes/calculatorRoute');

const app = express()
const port = 3000
const public_dir = 'public';

app.use(express.json());

app.use('/', express.static(public_dir))
app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoute);


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to my MongoDB application." });
});

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
const express = require("express");
require("dotenv").config();
const morgan = require('morgan');
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');



const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMySQL application." });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
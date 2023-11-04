const express = require("express");
require("dotenv").config();
const morgan = require('morgan');
require("./dbConnect");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');


const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/pokemon', pokemonRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMySQL application." });
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
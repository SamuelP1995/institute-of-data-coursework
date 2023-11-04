'use strict'


const User = require('./user') //require the model
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')
const Pokemon = require('./pokemon')

async function init() {
    await User.sync(); //sync the model
    await Post.sync();
    await Comment.sync({ alter: true });
    await Like.sync({ alter: true });
    await Pokemon.sync({ alter: true })
};

init();

module.exports = {
    User, //export the model
    Post,
    Comment,
    Like,
    Pokemon
};
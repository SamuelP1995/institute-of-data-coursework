'use strict'

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');

const Models = {
    User, 
    Post,
    Comment,
    Like
}

module.exports = Models;
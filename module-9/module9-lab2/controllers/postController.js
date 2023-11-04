"use strict";

const Models = require("../models");


const createPost = (req, res) => {
    Models.Post.create(req.body)
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        console.log(err)
    })
}

const getPosts = (req, res) => {
    Models.Post.findAll({})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const getPostById = (req, res) => {
    Models.Post.findOne({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
}

const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
    Models.Comment.destroy({ where: { postId: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            console.log(err)
        })
    Models.Like.destroy({ where: { postId: req.params.id }})
        .then(data => {
            res.send({ result: 200, datt: data })
        }).catch(err => {
            console.log(err)
        })
        // lookup likes when that postId and and destroy them
        // lookup comments with that postId and destroy them
}

module.exports = {
    createPost, getPosts, getPostById, updatePost, deletePost
}
"use strict";

const Models = require("../models");


const createPost = (req, res) => {
    Models.Post.create(req.body)
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getPosts = (req, res) => {
    Models.Post.findAll({})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const getPostById = (req, res) => {
    Models.Post.findOne({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

module.exports = {
    createPost, getPosts, getPostById, updatePost, deletePost
}
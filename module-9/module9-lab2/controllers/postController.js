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

const getPosts = (res) => {
    Models.Post.findAll({})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const getPostById = (req, res) => {
    const id = req.params.id;
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



module.exports = {
    createPost, getPosts, getPostById,  updatePost
}
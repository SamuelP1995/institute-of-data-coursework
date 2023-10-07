"use strict";

let Models = require("../models"); 


const createPost = (req, res) => {
    new Models.Post(req.body).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const getPosts = (req, res) => {
    Models.Post.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const getPostById = (req, res) => {
    const postId = req.params.postId;
    Models.Post.find({ _id: postId })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const updatePost = (req, res) => {
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.postId, req.body, { 
    useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const deletePost = (req, res) => {
    Models.Post.findByIdAndRemove(req.params.postId, req.body, { 
    useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    })
}


module.exports = {
    createPost, getPosts, getPostById, updatePost, deletePost
}
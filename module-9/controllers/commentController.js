"use strict";

let Models = require("../models"); 


const createComment = (req, res) => {
    new Models.Comment(req.body).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const getComments = (req, res) => {
    Models.Comment.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const getCommentById = (req, res) => {
    const commentId = req.params.commentId;
    Models.Comment.find({ _id: commentId })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

const updateComment = (req, res) => {
    console.log(req.body)
    Models.Comment.findByIdAndUpdate(req.params.commentId, req.body, { 
    useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const deleteComment = (req, res) => {
    Models.Comment.findByIdAndRemove(req.params.commentId, req.body, {
    useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    })
}


module.exports = {
    createComment, getComments, getCommentById, updateComment, deleteComment
}
"use strict";

const Models = require("../models");


const createComment = (req, res) => {
    Models.Comment.create(req.body)
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getComments = (req, res) => {
    Models.Comment.findAll({})
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getCommentById = (req, res) => {
    Models.Comment.findOne({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const updateComment = (req, res) => {
    Models.Comment.update(req.body, { where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

const deleteComment = (req, res) => {
    Models.Comment.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}

module.exports = {
    createComment, getComments, getCommentById, updateComment, deleteComment
}
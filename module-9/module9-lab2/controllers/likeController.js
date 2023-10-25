"use strict";

const Models = require("../models");


const createLike = (req, res) => {
    Models.Like.create(req.body)
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getLikes = (req, res) => {
    Models.Like.findAll({})
    .then(data => {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteLike = (req, res) => {
    Models.Like.destroy({ where: { id: req.params.id }})
        .then(data => {
            res.send({ result: 200, data: data })
        }).catch(err => {
            throw err
        })
}



module.exports = {
    createLike, getLikes, deleteLike
}
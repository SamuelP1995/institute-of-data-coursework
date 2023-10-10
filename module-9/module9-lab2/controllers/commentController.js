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




module.exports = {
    createComment
}
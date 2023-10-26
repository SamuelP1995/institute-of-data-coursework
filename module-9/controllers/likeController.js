"use strict";

let Models = require("../models"); 


const createLike = (req, res) => {
    new Models.Like(req.body).save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

const deleteLike = (req, res) => {
    Models.Like.findByIdAndRemove(req.params.likeId, req.body, {
    useFindAndModify: false })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    })
}

const getLikes = (req, res) => {
    Models.Like.find({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}



module.exports = {
    createLike, getLikes, deleteLike
}
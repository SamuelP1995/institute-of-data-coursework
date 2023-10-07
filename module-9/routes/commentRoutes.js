

const express = require("express");
const router = express.Router();
let Controllers = require("../controllers"); 


router.post('/', (req, res) => {
    Controllers.commentController.createComment(req, res)
})

router.get('/', (req, res) => {
    Controllers.commentController.getComments(req, res)
})

router.get('/:commentId', (req, res) => {
    Controllers.commentController.getCommentById(req, res)
})

router.put('/:commentId', (req, res) => {
    Controllers.commentController.updateComment(req, res)
})

router.delete('/:commentId', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
})



module.exports = router;

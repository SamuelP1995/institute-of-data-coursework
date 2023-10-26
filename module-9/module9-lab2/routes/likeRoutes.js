const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.post('/', (req, res) => {
    Controllers.likeController.createLike(req, res)
})

router.get('/', (req, res) => {
    Controllers.likeController.getLikes(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.likeController.deleteLike(req, res)
})

module.exports = router;
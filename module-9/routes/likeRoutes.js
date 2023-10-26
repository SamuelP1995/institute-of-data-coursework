

const express = require("express");
const router = express.Router();
let Controllers = require("../controllers"); 


router.post('/', (req, res) => {
    Controllers.likeController.createLike(req, res)
})

router.delete('/likeId', (req, res) => {
    Controllers.likeController.deleteLike(req, res)
})

router.get('/', (req, res) => {
    Controllers.likeController.getLikes(req, res)
})



module.exports = router;

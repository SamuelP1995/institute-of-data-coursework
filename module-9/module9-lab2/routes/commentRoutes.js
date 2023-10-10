const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");



router.post('/', (req, res) => {
    Controllers.commentController.createComment(req, res)
})



module.exports = router;
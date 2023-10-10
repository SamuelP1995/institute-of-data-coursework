const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.post('/', (req, res) => {
    Controllers.postController.createPost(req, res)
})

router.get('/', (res) => {
    Controllers.postController.getPosts(res)
})

router.get('/:id', (req, res) => {
    Controllers.postController.getPostById(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})

module.exports = router;

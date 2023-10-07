


const express = require("express");
const router = express.Router();
let Controllers = require("../controllers"); 

router.post('/', (req, res) => {
    Controllers.postController.createPost(req, res)
})

router.get('/', (req, res) => {
    Controllers.postController.getPosts(req, res)
})

router.get('/:postId', (req, res) => {
    Controllers.postController.getPostById(req, res)
})

router.put('/:postId', (req, res) => {
    Controllers.postController.updatePost(req, res)
})

router.delete('/:postId', (req, res) => {
    Controllers.postController.deletePost(req, res)
})



module.exports = router;
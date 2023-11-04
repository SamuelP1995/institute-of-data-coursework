const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.pokemonController.getPokemon(req, res)
})

// router.post('/', (req, res) => {
//     Controllers.pokemonController.createPokemon(req, res)
// })

router.get('/:id', (req, res) => {
    Controllers.pokemonController.getPokemonById(req, res)
})

// router.put('/:id', (req, res) => {
//     Controllers.pokemonController.updatePokemon(req, res)
// })

// router.delete('/:id', (req, res) => {
//     Controllers.pokemonController.deletePokemon(req, res)
// })

module.exports = router;
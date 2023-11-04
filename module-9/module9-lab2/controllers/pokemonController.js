"use strict";

const Models = require("../models");


const axios = require('axios');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon'; 


const getPokemon = (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => { 
            console.log({response})
            const results = response.data.results;

            const urls = results.map(({url}) => url);
            console.log({urls});

            const urlsPromise = urls.map(urls =>
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            );

            Promise.all(urlsPromise).then(results => {
                const pokemons = results.map(({data}) => data);
                console.log({pokemons}) 

                const formattedPokemons = pokemons.map(({name, url}) => ({
                    name, 
                    url
                }));
                
                console.log({formattedPokemons});

                res.send({result: 200, data: results })
            })

            res.send({ result: 200, data: urls});

            const formattedResults = results.map(({name, url}) => {
                return ({
                    name, 
                    url
                })
            })
            // Models.Pokemon.bulkCreate(formattedResults).then(result => {
            //      res.send(result);
            //  })
        }).catch(err => {
            console.log(err)
        })
}

const getPokemonById = (req, res) => {
    const pokeId = req.params.id;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(response => {
            console.log("Pokemon by Id : ", response.data)

            const pokemonId = pokeData.id;
            const name = pokeData.name;
            const height = pokeData.height;

            console.log("Pokemon by Id but what i need : ", {pokemonId, name, height} );
            const pokemon = { pokemonId, name, height };

            Models.Pokemon.create(pokemon)
                .then(data => {
                    res.send ({ result: 200, data: data })
                })
        }).catch(err => {
            console.log(err)
        })
}

// const deletePokemon = (req, res) => {
//     Models.Pokemon.destroy({ where: { id: req.params.id }})
//         .then(data => {
//             res.send({ result: 200, data: data })
//         }).catch(err => {
//             console.log(err)
//         })
// }

// const updatePokemon = (req, res) => {
//     Models.Pokemon.update(req.body, { where: { id: req.params.id }})
//         .then(data => {
//             res.send({ result: 200, data: data })
//         }).catch(err => {
//             console.log(err)
//         })
// }



module.exports = {
    getPokemon,
    getPokemonById, 
    // deletePokemon, 
    // updatePokemon
}
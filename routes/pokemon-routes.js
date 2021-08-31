const express = require('express');
const router = express.Router();
const {getAllPokemon,getAllPokemonLimit,addPokemon,updatePokemon} =require('../controllers/pokemonController');


router.get('/pokemons', getAllPokemon);
router.get('/pokemons/:limit', getAllPokemonLimit);
router.post('/pokemons/add', addPokemon);
router.put('/pokemons/update/:id', updatePokemon);


module.exports = {
    routes: router
}
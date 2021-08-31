const {Pokemon} = require('../models/pokemon')

const getAllPokemon = async (req,res,next) =>{
    Pokemon.find({}, (err,dataPokemon)=>{
        if(!err){
            res.json({
                data: dataPokemon
            })
        }else{
            console.log(err)
        }
    })
}
const getAllPokemonLimit = async (req,res,next) =>{
    Pokemon.find({}, (err,dataPokemon)=>{
        if(!err){
            res.json({
                data: dataPokemon
            })
        }else{
            console.log(err)
        }
    }).limit(+req.params.limit)
}

const addPokemon = async (req,res,next) =>{
    let numberCount = await Pokemon.find().countDocuments() + 1

    if(+numberCount < 10 ){
        numberCount = "00" + numberCount
    } else if(+numberCount < 100 && +numberCount >= 10) {
        numberCount = "0" + numberCount
    }

    var pokemon = new Pokemon(
        {
            number:numberCount,
            name:req.body.name,
            types:req.body.types,

        }
    );

    pokemon.save( (err) => {
        if(!err){
            res.status(200).json({
                message: 'OK',
            });
        }else{
            res.send(err)
        }
    });
}

const updatePokemon = async (req,res,next) =>{
    var query = {"_id": req.params.id}
    var pokemon =
        {
            number: req.body.number,
            name:req.body.name,
            types:req.body.types

        }
    
    Pokemon.findByIdAndUpdate(query, {$set: pokemon}, {new:true}, function (err,data){
        if(!err){
            res.status(200).json({
                message: 'OK',
            });
        }else{
            console.log(err)
            res.send(err)
        }
    });
}



module.exports = {
    getAllPokemon,
    getAllPokemonLimit,
    addPokemon,
    updatePokemon
}
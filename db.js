const mongoose = require('mongoose');
const config = require('./config');


const connectionDB = async () =>{
    try {
        const conn  = await mongoose.connect("mongodb+srv://admin:adminlolo@cluster0.rlttw.mongodb.net/pahamify",{
           useNewUrlParser: true,
           useUnifiedTopology: true,
        });
        console.log(`Monggo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectionDB;
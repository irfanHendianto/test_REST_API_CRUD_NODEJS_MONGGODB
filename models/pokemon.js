const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon', {
    number: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    types: {
        type: Array,
        required: true,
    },
});

module.exports = {Pokemon}
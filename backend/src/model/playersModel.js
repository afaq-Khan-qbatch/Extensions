const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: {
        type: String
    },
    batting: {
        type: Object
    },
    bowling: {
        type: Object
    },
    battingRankings: {
        type: Object
    },
    bowlingRankings: {
        type: Object
    }
})

const player = new mongoose.model('players' , playerSchema);

module.exports = player
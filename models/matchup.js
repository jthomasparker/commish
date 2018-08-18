const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const matchupSchema = new Schema({
    week: { type: String, required: true },
    _seasonId: { type: Schema.Types.ObjectId, ref: 'Season' },
    winner: {
        _playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
        score: { type: Number, required: true },
        projectedScore: { type: Number, required: true },
        projectedFavorite: { type: Boolean, default: false }
    },
    loser: {
        _playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
        score: { type: Number, required: true },
        projectedScore: { type: Number, required: true },
        projectedFavorite: { type: Boolean, default: false }
    },
    divisionGame: { type: Boolean, default: false }
})

const Matchup = mongoose.model("Matchup", matchupSchema);

module.exports = Matchup;
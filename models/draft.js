const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const draftSchema = new Schema({
    _playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    _seasonId: { type: Schema.Types.ObjectId, ref: 'Season' },
    playerDrafted: {
        name: { type: String, required: true },
        pos: { type: String }
    },
    round: { type: Number, required: true },
    overallPick: { type: Number }
})

const Draft = mongoose.model("Draft", draftSchema);

module.exports = Draft;
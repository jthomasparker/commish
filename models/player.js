const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    divisions: [{ type: Schema.Types.ObjectId, ref: 'Division' }],
    matchups: [{ type: Schema.Types.ObjectId, ref: 'Matchup' }],
    draftResults: [{ type: Schema.Types.ObjectId, ref: 'Draft' }]
})

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
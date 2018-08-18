const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
    year: { type: Number, required: true },
    divisions: [{ type: Schema.Types.ObjectId, ref: 'Division' }],
    matchups: [{ type: Schema.Types.ObjectId, ref: 'Matchup' }],
    draftResults: [{ type: Schema.Types.ObjectId, ref: 'Draft' }]
})

const Season = mongoose.model("Season", seasonSchema);

module.exports = Season;
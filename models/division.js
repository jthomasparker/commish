const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
    divisionNum: { type: Number, required: true },
    _seasonId: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
})

const Division = mongoose.model("Division", divisionSchema);

module.exports = Division;
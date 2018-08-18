const db = require('../models')
const statsController = require('./statsController')



module.exports = {
    getPlayers: () => {
        db.Player.find()
            .then(dbPlayers => console.log(dbPlayers))
    }
}

const getPlayers = () => {
    db.Player.find()
        .then(dbPlayers => console.log(dbPlayers))
}


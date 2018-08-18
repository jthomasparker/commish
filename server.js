const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
//const seed = require('./seed/seedDb.js')
const leagueController = require('./controllers/leagueController')

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('random_secret'))
//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/league");

//seed.populatePlayers()
//seed.createMatchups()
//seed.getStats()
//seed.populateDivs()
//leagueController.getPlayers()


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

// API routes
router.use("/api", apiRoutes);

// Default if no API routes are hit
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
  module.exports = router;
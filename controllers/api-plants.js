const db = require("../models");
const path = require("path");

module.exports = function (app) {

  app.get("/api/plants", function (req, res) {
    console.log(req.query);
    db.plants.findAll({
      where: {
        Sunlight_Needs: req.query.sunlight,
        Humidity: `${req.query.humidity} Humidity`,
        Maintenance_Level: req.query.maintenance,
        Poisonous: req.query.poison === "No"
      }
    })
      // Returns results matching the query
      .then(function (Plants_db) {
        console.log(Plants_db);
        // successfully renders the results page in the network tab
        res.render("results", { plants: Plants_db });
      });
  });
};

//Dependencies
// =============================================================
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");

const hbs = exphbs.create({
  defaultLayout: 'app',
  extname: '.hbs',
  layoutsDir: `${__dirname}/app/views/layouts/`,
  partialsDir: `${__dirname}/app/views/partials/`,
});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory to be served
app.use(express.static("./public"));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


//Controllers//
require("./controllers/api-routes")(app);
require("./controllers/api-plants")(app);

// Routes

// HTML ROUTES
require("./routes/html-routes")(app);

//Syncing sequelize models and then starting the Express app//
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
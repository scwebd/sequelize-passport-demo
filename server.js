var express = require("express");
var flash = require("connect-flash");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();

// urlencoded middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// passport middleware setup
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// handlebars middleware setup
app.set("views", "./views")
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// main route (you would likely add a separate routes file for your non-auth routes!)
app.get("/", function (req, res) {
    res.render("index");
});

// auth routes
var authRoutes = require("./routes/auth.js")(app, passport);

// load passport strategies
require("./config/passport/passport.js")(passport, db.User);

// sync w/database
db.sequelize.sync()
    .then(function() {
        app.listen(PORT, function(err) {
            if (err) {
                return console.log(err);
            }
        
            console.log(`Server now running on http://localhost:${PORT}!`);
        });
    }).catch(function (err) {
        console.log(err, "Something went wrong with the db sync!");
    });
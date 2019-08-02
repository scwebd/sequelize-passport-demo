var authController = require("../controllers/authController.js");

module.exports = function (app, passport) {
    app.get("/signup", authController.signup);
    app.get("/login", authController.login);
    app.get("/logout", authController.logout);
    app.get("/dashboard", isLoggedIn, authController.dashboard);

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: "/dashboard",
        failureRedirect: "/signup",
        failureFlash: true
    }));

    app.post("/login", passport.authenticate("local-login", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next(); // if logged in, execute next middleware
        }

        res.redirect("/login"); // if not logged in, redirect to /login
    }
}







var express = require('express');
var router = express.Router();
var passport = require("passport");
var authController = require("../controllers/authController.js");
var isLoggedIn = require("../config/middleware/isLoggedIn");

router.get("/signup", authController.signup);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/dashboard", isLoggedIn, authController.dashboard);

router.post("/signup", passport.authenticate("local-signup", {
    successRedirect: "/dashboard",
    failureRedirect: "/signup",
    failureFlash: true
}));

router.post("/login", passport.authenticate("local-login", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
}));

module.exports = router;







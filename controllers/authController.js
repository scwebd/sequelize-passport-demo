module.exports = {
    signup: function (req, res) {
        var error = req.flash("error")[0];
        res.render("signup", { error: error });
    },
    login: function (req, res) {
        var error = req.flash("error")[0];
        res.render("login", { error: error });
    }, 
    dashboard: function (req, res) {
        res.render("dashboard");
    }, 
    logout: function (req, res) {
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    }
}
module.exports = {
    signup: function (req, res) {
        // if user is logged in, redirect to /dashboard
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            return res.redirect("/dashboard");
        }

        res.render("signup", { error: res.locals.error });
    },
    login: function (req, res) {
        // if user is logged in, redirect to /dashboard
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            return res.redirect("/dashboard");
        }

        res.render("login", { error: res.locals.error });
    },
    dashboard: function (req, res) {
        console.log(req.user)
        res.render("dashboard", { 
            successMsg: res.locals.successMsg,
            email: req.user.email
        });
    },
    logout: function (req, res) {
        req.logout();
        req.flash("successMsg", "You successfully logged out");
        res.redirect("/");
    }
}
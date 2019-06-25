const express = require("express");
const knex = require("../db/client");
const router = express.Router();

router.get("/sign_in", (req, res) => {

    const username = req.query.username;

    res.render("signIn", {
        username: username,
    });
});
//is same from notes?
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;//ms
router.post("/sign_in", (req, res) => {

    const username = req.body.username;
    res.cookie("username", username, {
        maxAge: COOKIE_MAX_AGE
    });

    res.redirect("/loged_in");
});

router.get("/loged_in", (req, res) => {
    res.render("logedIn");
});

router.post("/sign_out", (req, res) => {
    res.clearCookie("username");
    res.redirect("/");
});




module.exports = router;
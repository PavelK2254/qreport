var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var router = express.Router();

/* GET home page. */
router.get('/', passport.authenticate('facebook', { failureRedirect: '/fb/login' }),
    function (req, res) {
        console.log(`ERROR! ${res}`)
        res.redirect('/fb/profile');
    });

module.exports = router;
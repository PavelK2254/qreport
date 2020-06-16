var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var auth = require('../config/auth')
var router = express.Router();

passport.use(new Strategy({
    clientID: auth.facebookAuth.clientID,
    clientSecret: auth.facebookAuth.clientSecret,
    callbackURL: auth.facebookAuth.callbackUrl
},
    function (accessToken, refreshToken, profile, cb) {
        // In this example, the user's Facebook profile is supplied as the user
        // record.  In a production-quality application, the Facebook profile should
        // be associated with a user record in the application's database, which
        // allows for account linking and authentication with other identity
        // providers.
        return cb(null, profile);
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

router.use(passport.initialize());

router.get('/', (req, res, next) => {
    console.log('-----> got response');
    return passport.authenticate('facebook')(req, res, next)
});


/* GET home page. */


module.exports = router;
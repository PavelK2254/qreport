var express = require('express');
var router = express.Router();


router.get('/',
require('connect-ensure-login').ensureLoggedIn('/'),
    function (req, res) {
        console.log(`Profile Result ${res}`)
        res.send('profile', { user: req.user });
    });

/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
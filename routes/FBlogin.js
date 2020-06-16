var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var router = express.Router();



router.get('/', (res, req, next) => {
console.log('');

});
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
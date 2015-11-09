var express = require('express');
var router = express.Router();

//db
var db = require('monk')('localhost/xpres-chess');
var Users = db.get('users');
var Games = db.get('games');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Nunu Chess' });
});

module.exports = router;

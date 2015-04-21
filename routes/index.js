var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Myo-hand', pusherKey: CONFIG.pusherKey });
});

module.exports = router;

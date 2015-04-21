var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:session', function(req, res, next) {
  var session = req.params.session;
  res.render('game', { pusherKey: CONFIG.pusherKey });
});

module.exports = router;

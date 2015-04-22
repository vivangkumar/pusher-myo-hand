var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:session/:name', function(req, res, next) {
  var session = req.params.session;
  var name = req.params.name;

  res.render('game', { pusherKey: CONFIG.pusherKey, playerName: name });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:session/:name', function(req, res, next) {
  var session = req.params.session;
  var name = req.params.name;
  var myoPlayer = req.query.myo_player;

  res.render('game', {
  	pusherKey: CONFIG.pusherKey,
  	playerName: name,
  	myoPlayer: myoPlayer
  });
});

module.exports = router;

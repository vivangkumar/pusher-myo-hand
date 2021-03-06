/**
 * Main.js
 *
 */

 function _generateSessionKey(size) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i=0; i < size; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
 }

 function newSession() {
  $('#join-session-button').click(function() {
    var sessionKey = _generateSessionKey(12);

    var gameLink = '/game/' + sessionKey ;
    var htmlToAppend = '<br><br><a href="' + gameLink + '">' + window.location.href + sessionKey + '</p>';
    $('#code-box').html('Share this link with someone to invite them to your game ' + htmlToAppend);
  });
 }

 function playGame() {
  $('#play-game-button').click(function() {
    var sessionKey = window.location.pathname.split('/')[2];
    var userName = $('#player-name-input').val();
    var myoPlayer = $('#myo-player-check').val();
    if ($('#myo-player-check').is(':checked')) {
      var myoPlayer = true;
    } else {
      var myoPlayer = false;
    }
    var gameLink = '/game/' + sessionKey + '/' + userName + '?myo_player=' + myoPlayer;
    window.location.href = gameLink;
  });
 }

 $(window).load(function() {
  playGame();
  newSession();
 });
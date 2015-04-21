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

 function showNewSession() {
  $('#join-session-button').click(function() {
    var sessionKey = _generateSessionKey(12);
    var gameLink = '/game/' + sessionKey;
    var htmlToAppend = '<br><br><a href="' + gameLink + '">' + window.location.href + sessionKey +'</a></p>';
    $('#code-box').html('Share this link with someone to invite them to your game ' + htmlToAppend);
  });
 }

 $(window).load(function() {
  showNewSession();
 });
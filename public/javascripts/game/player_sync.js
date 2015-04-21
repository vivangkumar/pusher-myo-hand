
function updatePlayerLoc(p) {
  console.log("UPDATING")
  locChan.trigger('client-update', {sessionID: pusher.sessionID, pos: p});
}

locChan.bind('client-update', function(data) {
  state.playerLocations[data.sessionID]["x"] = data.pos.x;
  state.playerLocations[data.sessionID]["y"] = data.pos.y;
});

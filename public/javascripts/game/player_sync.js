
function updatePlayerLoc(p) {
  locChan.trigger('client-update', {sessionID: pusher.sessionID, pos: p});
}

locChan.bind('client-update', function(data) {
  state.playerLocations[data.sessionID] = {
    x: data.pos.x,
    y: data.pos.y
  };
});

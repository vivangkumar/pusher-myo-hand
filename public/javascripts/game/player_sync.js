
function updatePlayerLoc(p) {
  locChan.trigger('client-update', {sessionID: pusher.sessionID, pos: p});
}

locChan.bind('client-update', function(data) {
  state.playerLocations[data.sessionID] = {
    x: data.pos.x,
    y: data.pos.y
  };
});

function killPlayer() {
  locChan.trigger('client-kill-player', {sessionID: pusher.sessionID});
}

locChan.bind('client-kill-player', function(data) {
  delete state.playerLocations[data.sessionID];
  hideCharacter(data.sessionID);
});

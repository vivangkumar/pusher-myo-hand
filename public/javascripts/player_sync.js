
function updatePlayerLoc(p) {
  locChan.trigger('client-loc', p);
}

locChan.bind('update', function(data) {
  state.playerLocations[data.playerId] = data.pos;
});

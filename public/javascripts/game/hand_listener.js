
handChan.bind('client-hand-pos', function(data) {
  state.handLocation.x = state.handLocation.x + (data.x);
});

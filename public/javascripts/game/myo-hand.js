
var myMyo = Myo.create();

// Make sure Myo does not lock continuously
myMyo.on('connected', function() {
  myMyo.setLockingPolicy('none');
});

var prevTime2 = Date.now();

handChan.bind('pusher:subscription_succeeded', function() {
  myMyo.on('pose', function (poseName, edge) {
    if (!edge) return;
    if (poseName == 'wave_in') {
      handChan.trigger('client-hand-pos', {x: -100});
      state.handLocation.x = state.handLocation.x - 100;
    } else if (poseName == 'wave_out') {
      handChan.trigger('client-hand-pos', {x: + 100});
      state.handLocation.x = state.handLocation.x + 100;
    }
 });
});

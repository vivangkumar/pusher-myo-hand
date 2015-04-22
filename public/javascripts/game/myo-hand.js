
var myMyo = Myo.create();

// Make sure Myo does not lock continuously
myMyo.on('connected', function() {
  myMyo.setLockingPolicy('none');
});

handChan.bind('pusher:subscription_succeeded', function() {
  myMyo.on('pose', function (poseName, edge) {
    if (!edge) return;
    console.log(poseName);
    handChan.trigger('client-pose', {'pose': poseName});
  });
});

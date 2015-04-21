
var myMyo = Myo.create();

handChan.bind('pusher:subscription_succeeded', function() {
  myMyo.on('pose', function (poseName, edge) {
    if (!edge) return;
    console.log(poseName);
    myMyo.vibrate();
    handChan.trigger('client-pose', {'pose': poseName});
  });
});

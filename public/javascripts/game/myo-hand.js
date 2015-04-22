
var myMyo = Myo.create();

// Make sure Myo does not lock continuously
myMyo.on('connected', function() {
  myMyo.setLockingPolicy('none');
});

var prevTime2 = Date.now();

handChan.bind('pusher:subscription_succeeded', function() {
  //myMyo.on('pose', function (poseName, edge) {
  //  if (!edge) return;
  //  console.log(poseName);
  //  handChan.trigger('client-pose', {'pose': poseName});
  //});

  myMyo.on('accelerometer', function(data) {
    var time2 = Date.now();
    if (time2 - prevTime2 > 1000) {
      handChan.trigger('client-hand-pos', {data: data});
      console.log(state.handLocation.x);
      console.log(data.x);
      state.handLocation.x = state.handLocation.x + (data.z * 100);
      console.log(state.handLocation.x);
      prevTime2 = time2;
    }
  });
});

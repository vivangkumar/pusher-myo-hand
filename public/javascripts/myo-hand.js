
var pusher = new Pusher(pusherKey);
var handChan = pusher.subscribe('hand-events');

var myMyo = Myo.create();

myMyo.on('fist', function(edge){
  if(!edge) return;
  console.log('Hello Myo!');
  myMyo.vibrate();
});

var state = {
  "playerLocations": { },
  "handLocation": {
    "x": 900,
    "y": 100
  }
};
state.playerLocations[pusher.sessionID] = {
  "x": 0,
  "y": 0
};

var playerState = {
  "x": 0,
  "y": 100,
  "vx": 0,
  "vy": 0
};

var input = {
  "x": 0,
  "y": 0
};

var prevTime = Date.now();
var prevSyncTime = Date.now();
function loop() {
  //console.log(state.handLocation.x);
  //console.log(playerState);
  var time = Date.now();
  var delta = (prevTime - time) / 10;
  prevTime = time;
  playerState = jump(playerState, input);
  playerState = gravity(playerState, delta);
  playerState = physics(playerState, delta);
  playerState = walk(playerState, input);
  state.playerLocations[pusher.sessionID]["x"] = playerState.x;
  state.playerLocations[pusher.sessionID]["y"] = playerState.y;

  if (time - prevSyncTime > 100) {
    //updatePlayerLoc(playerState);
    prevSyncTime = time;
  }
  render(state);
}

function engine() {
  setInterval(loop, 40);
}

handChan.bind('pusher:subscription_succeeded', function () {
  locChan.bind('pusher:subscription_succeeded', function () {
    engine();
  })
});

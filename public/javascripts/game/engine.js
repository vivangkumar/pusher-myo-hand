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
  if (state.playerLocations[pusher.sessionID]) { // check if player alive
    var time = Date.now();
    var delta = (prevTime - time) / 10;
    prevTime = time;
    playerState = jump(playerState, input);
    playerState = gravity(playerState, delta);
    playerState = physics(playerState, delta);
    playerState = walk(playerState, input);
    state.playerLocations[pusher.sessionID]["x"] = playerState.x;
    state.playerLocations[pusher.sessionID]["y"] = playerState.y;
    detectCollisions();
    if (time - prevSyncTime > 1000) {
      updatePlayerLoc(playerState);
      prevSyncTime = time;
    }
  }
  render(state);
}

function detectCollisions() {
  for (var playerID in state.playerLocations) {
    var playerLoc = state.playerLocations[playerID];
    var handLoc = state.handLocation;
    if (distance(playerLoc.x + 14, playerLoc.y + 24, handLoc.x + 35, handLoc.y + 120) < 42) {
      delete state.playerLocations[playerID];
      alert("you are dead!");
    }
  }
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function engine() {
  setInterval(loop, 40);
}

handChan.bind('pusher:subscription_succeeded', function () {
  locChan.bind('pusher:subscription_succeeded', function () {
    engine();
  })
});

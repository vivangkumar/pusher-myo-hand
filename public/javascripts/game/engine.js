var state = {
  "playerLocations": { },
  "handLocation": {
    "x": 900,
    "y": 100
  }
};

if (myoPlayer == "false") {
  state.playerLocations[pusher.sessionID] = {
    "x": 0,
    "y": 0
  };

  playerState = {
    "x": 0,
    "y": 100,
    "vx": 0,
    "vy": 0
  };
}

var input = {
  "x": 0,
  "y": 0
};

var prevTime = Date.now();
var prevSyncTime = Date.now();
function loop() {
  //console.log(state.handLocation.x);
  //console.log(playerState);
  if (state.playerLocations[pusher.sessionID] && myoPlayer == "false") { // check if player alive
    var time = Date.now();
    var delta = (prevTime - time) / 10;
    prevTime = time;
    playerState = jump(playerState, input);
    playerState = gravity(playerState, delta);
    playerState = physics(playerState, delta);
    playerState = walk(playerState, input);
    state.playerLocations[pusher.sessionID]["x"] = playerState.x;
    state.playerLocations[pusher.sessionID]["y"] = playerState.y;
    if (isCollided()) {
      delete state.playerLocations[pusher.sessionID];
      killPlayer();
      hideCharacter(pusher.sessionID);
      setTimeout(function() {
        alert("You're dead!");
      }, 50);
    }
    if (time - prevSyncTime > 1000) {
      updatePlayerLoc(playerState);
      prevSyncTime = time;
    }
  }
  render(state);
}

function isCollided() {
  return distance(playerState.x + 14, playerState.y + 24, state.handLocation.x + 35, state.handLocation.y + 120) < 42;
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

var state = {
  "playerLocations": {
    1: {
      "x": 0,
      "y": 0
    }
  },
  "handAction": null
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
function loop() {
  console.log("stepping");
  console.log(state);
  console.log(playerState);
  var time = Date.now();
  var delta = (prevTime - time) / 10;
  prevTime = time;
  playerState = jump(playerState, input);
  playerState = gravity(playerState, delta);
  playerState = physics(playerState, delta);
  playerState = walk(playerState, input);
  state.playerLocations[1]["x"] = playerState.x;
  state.playerLocations[1]["y"] = playerState.y;
  //updatePlayerLoc(playerState);
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

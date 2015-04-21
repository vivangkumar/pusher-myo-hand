var state = {
  "playerLocations": {},
  "handAction": null
};

var playerState = {
  "x": 0,
  "y": 0,
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
  var time = Date.now();
  var delta = prevTime - time;
  prevTime = time;
  playerState = jump(playerState, input);
  playerState = gravity(playerState, delta);
  playerState = physics(playerState, delta);
  playerState = walk(playerState, input);
  updatePlayerLoc(playerState);
  //render(state);
}

function engine() {
  setInterval(loop, 300);
}

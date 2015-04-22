/**
 * Main game file.
 *
 */
 var sessionKey = window.location.pathname.split('/')[2];
 var pusher = new Pusher(pusherKey, {authEndpoint: '/pusher/auth'});
 var handChan = pusher.subscribe('private-hand-events-' + sessionKey);
 var locChan = pusher.subscribe('private-player-locs-' + sessionKey);

 var game = new Phaser.Game(
  $(window).width(),
  300,
  Phaser.AUTO,
  'game-canvas',
  { preload: preload, create: create, update: update }
 );

 var globalPlayers = {};

 function render(state) {
  for (var playerID in state.playerLocations) {
   if (!globalPlayers[playerID]) {
    createNewCharacter(game.world.height - 80, playerID);
   }
   globalPlayers[playerID].x = state.playerLocations[playerID].x;
   globalPlayers[playerID].y = state.playerLocations[playerID].y;
  }
  hand.x = state.handLocation.x;
 }

 function createNewCharacter(pos, playerID) {
  var player = game.add.sprite(32, pos, 'dude');

  player.frame = 0;
  game.physics.arcade.enable(player);

  player.body.collideWorldBounds = true;

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  player.tint = generateHex();
  globalPlayers[playerID] = player;
 }

 function preload() {
  game.load.spritesheet('dude', '../images/game-assets/dude.png', 32, 48);
  game.load.image('sky', '../images/game-assets/sky.png');
  game.load.image('ground', '../images/game-assets/platform.png');
  game.load.image('hand', '../images/game-assets/hand.png');

 }

 function create() {
  // Enable physics engine
  game.physics.startSystem(Phaser.Physics.ARCADE);
  var sky = game.add.sprite(0, 0, 'sky');
  sky.scale.setTo(2, 2);

  platforms = game.add.group();
  platforms.enableBody = true;

  var ground = platforms.create(0, game.world.height - 30, 'ground');
  ground.scale.setTo(4, 4);
  ground.body.immovable = true;
  hand = game.add.sprite(game.world.width - 70, 170, 'hand');
  cursors = game.input.keyboard.createCursorKeys();
 }

 function update() {
  for (var pl in globalPlayers) {

    if (cursors.left.isDown) {
      globalPlayers[pl].animations.play('left');
    } else if (cursors.right.isDown) {
      globalPlayers[pl].animations.play('right');
    } else {
      //  Stand still
      globalPlayers[pl].animations.stop();
      globalPlayers[pl].frame = 4;
    }
  }
 }

 function generateHex() {
  return '0x' + (Math.random() * 0xFFFFFF << 0).toString(16);
 }

/**
 * Main game file.
 *
 */

 var game = new Phaser.Game(
  $(window).width(),
  300,
  Phaser.AUTO,
  'game-canvas',
  { preload: preload, create: create, update: update }
 );

 function createNewCharacter(pos) {
  var player = game.add.sprite(32, pos, 'dude');
  game.physics.arcade.enable(player);

  player.body.collideWorldBounds = true;

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
 }

 function preload() {
  game.load.spritesheet('dude', '../images/game-assets/dude.png', 32, 48);
  game.load.image('sky', '../images/game-assets/sky.png');
  game.load.image('ground', '../images/game-assets/platform.png');

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
  createNewCharacter(game.world.height - 80);
 }

 function update() {

 }
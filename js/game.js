/* global Phaser */

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  // set background colour
  backgroundColor: 0x5f6e7a
}
const game = new Phaser.game(config)
console.log(game)
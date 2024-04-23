/* global Phaser */

// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara
// Created on: April 2024
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// create new game scene
const splashScene = new SplashScene
const titleScene = new TitleScene

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    defualt: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
console.log("Game start point")

// load scenes
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

game.scene.start("splashScene")

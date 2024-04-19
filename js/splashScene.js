/* global Phaser */

// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara
// Created on: April 2024
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init (data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Splash Scene")
  }

  create(data) {
    // pass
  }

  update(time, delta) {
    // pass
  }
}

export default SplashScene

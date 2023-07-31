"use strict";
// Set up of querySelector
const $ = (selector) => document.querySelector(selector);

// !!!! user_name Input from local storage!!!!
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "interactive") {
    // initLoader();
  } else if (e.target.readyState === "complete") {
    // initApp();
    console.log("localStorage", localStorage.playerName);
    $("#userName").textContent = localStorage.playerName;
  }
});

// Set up canvas
const canvas = $("#canvas_con");
const ctx = canvas.getContext("2d");

function upDate() {
  let p = new Airplane;
  let t = new Target;
  // console.log(test)
  p.drawPlane();
  t.drawTarget();
  // console.log(test)
}
// Listening for the key-down and calling of the function.
$("body").addEventListener("keydown", (e) => {
  planeComands(e);
});
$("body").focus();

const gameArray = [];

class Airplane {
  constructor() {
    // set up of the element
    this.plane = document.createElement("img");
    this.plane.id = "plane";
    this.plane.src = "./assets/images/game/planes/plane.png";
    // this.id=
    this.botom = 0;
    this.x = 0;
  }
  drawPlane() {
    ctx.drawImage(this.plane, 100, 15);
    console.log("im the plane")
    console.log(this.plane)
  }
  planeComands(e) {
    // left arrow-key
    if (e.keyCode == 37) { }
    // right arrow-key
    if (e.keyCode == 39) { }
    // down arrow-key.
    if (e.keyCode == 40) { }
    // up arrow-key.
    if (e.keyCode == 38) { }
    // f-Key.
    if (e.keyCode == 70) { }
    // b-key 66
    if (e.keyCode == 66) { }
  }
};

class Target {
  constructor() {
    this.target = document.createElement("img");
    this.target.id = "target_plane";
    this.target.src = "./assets/images/game/targets/target_plane.png";

  }
  drawTarget() {
    ctx.drawImage(this.target, 100, 15);
    console.log("im the target")
    console.log(this.target)
  }
};

window.onload = function () {
  upDate();
  console.log("upDate working")
}

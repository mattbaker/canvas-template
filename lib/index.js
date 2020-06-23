"use strict";

// Get our canvas element
var canvas = document.getElementById('conway'); // Get the canvas "context" for it, we use this
// to draw stuff

var ctx = canvas.getContext('2d'); // This draws stuff when you run it using
// canvas. Read up on canvas. MDN is legit:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

var render = function render(x, y) {
  var width = 10;
  var height = 10;
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(x, y, width, height);
}; // X and Y are "global" variables and
// we'll change them on teach "tick" below


var x = 0;
var y = 0; // This is the tick function. It gets run on
// an interval. Think of it as your animation's
// clock ticking.

var tick = function tick() {
  console.log("Increasing x and y by 10");
  x += 10;
  y += 10;
  console.log("Drawing rectangle at ", x, y);
  render(x, y);
};

var tickDelay = 1000; // 1000ms == 1 second
// This causes tick to run every 1 second

setInterval(tick, tickDelay);
// Get our canvas element
const canvas = document.getElementById('conway');

// Get the canvas "context" for it, we use this
// to draw stuff
const ctx = canvas.getContext('2d');


// This draws stuff when you run it using
// canvas. Read up on canvas. MDN is legit:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
const render = (x, y) => {
  let width = 10
  let height = 10
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(x, y, width, height)
}

// X and Y are "global" variables and
// we'll change them on teach "tick" below
let x = 0;
let y = 0;

// This is the tick function. It gets run on
// an interval. Think of it as your animation's
// clock ticking.
const tick = () => {
  console.log("Increasing x and y by 10")
  x += 10
  y += 10
  console.log("Drawing rectangle at ", x, y)
  render(x,y)
}

const tickDelay = 1000 // 1000ms == 1 second

// This causes tick to run every 1 second
setInterval(tick, tickDelay)

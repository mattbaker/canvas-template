# Canvas Template


## Install
First run `npm install`.

I tested this using "live preview" is VSCode, but it might work if you just open index.html in Chrome or Edge.

## Usage

There's an index.html page that is pulling in your javascript already. You should write your code in src/index.js.

When you run `npm run build` the JS in your `src` directory gets converted into JS the browser can understand. It does this with a tool called Babel.Normally this happens magically for you in React projects. You need to run `npm run build` every time you make a change so that it convert your `src/` code into code in `lib/` which is what the browser is using

Alternatively, if you run `npm run watch` then Babel will keep an eye on the `src` directory and regenerate the files in `lib` every time you make a change. Then you don't have to build every time.

Just to re-iterate, you can edit `src` but you should never need to edit `lib`. That's a path to madness and lost work.

Sometimes `watch` gets messed up, so you can kill it (ctrl-c on a Mac, not sure on Windows) and restart it. Or just re-run build everytime you want to see a change (but that gets old).

## src/index.js

There's some an example code in here.

Animation like this boils down to a flow that's roughly:

 * Keep track of some data, say the conway grid
 * Have a "render" function that knows how to draw things
 * Have a "tick" function that runs on an interval.
 * On each "tick" you update the state of your game, then you use your render function to "draw" the game.
 * The tick will keep running infinitely.

 In this example our tick function updates an x and y coordinate, then draws a box there, and then waits for the next "tick" to do it again.

// p5js sketch for a checkerboard pattern
let gridMod = 0;
let speed = 1;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('p5div')
  background(220);
  // noLoop();
}

function draw() {
  
  const gridSize = 128;

  if (gridMod >= gridSize / 8) {
    speed = -1;
  } else if (gridMod <= 0) {
    speed = 1;
  }
  gridMod += speed;

  let w = width / gridSize;
  let h = height / gridSize;
  for (let i = 0; i < gridSize; i+=1) {
    for (let j = 0; j < gridSize; j+=1) {
      if ((i + j) % gridMod == 0) {
        fill(color(255, 0, 0));
      } else {
        fill(color(0, 0, 255));
      }
      rect(i * w, j * h, w, h);
    }
  }
}
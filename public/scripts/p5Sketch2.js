// p5js sketch for a checkerboard pattern
function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  let w = width / 8;
  let h = height / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * w, j * h, w, h);
    }
  }
}
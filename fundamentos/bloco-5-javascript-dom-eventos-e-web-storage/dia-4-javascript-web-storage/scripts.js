function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(select('body'));
  frameRate(60);
}

function draw() {
  background(255);
  strokeCap(SQUARE);
  strokeWeight(4);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.querySelector('.settings', toggleMenu);

function toggleMenu() {}

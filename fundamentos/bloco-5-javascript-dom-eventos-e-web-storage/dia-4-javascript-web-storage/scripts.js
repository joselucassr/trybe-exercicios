function setup() {
  createCanvas(windowWidth, windowHeight);
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

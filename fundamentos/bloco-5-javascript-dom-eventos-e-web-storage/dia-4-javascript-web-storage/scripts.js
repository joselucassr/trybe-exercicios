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

let settingsBtn = document.querySelector('.settings');
settingsBtn.addEventListener('click', toggleMenu);

document.querySelector('.go-back').addEventListener('click', toggleMenu);

let main = document.querySelector('main');
let settingsSection = document.querySelector('section');

function toggleMenu() {
  main.classList.toggle('hidden');
  settingsSection.classList.toggle('hidden');
  settingsBtn.classList.toggle('hidden');
}

let invertColorsBtn = document.querySelector('.invert-colors');
invertColorsBtn.addEventListener('click', invertColors);

let blackOverlay = document.querySelector('#overlay');
function invertColors() {
  blackOverlay.classList.toggle('hidden');
}

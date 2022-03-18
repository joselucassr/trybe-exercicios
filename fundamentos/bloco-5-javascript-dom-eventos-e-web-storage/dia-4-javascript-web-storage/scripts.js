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

let articleTag = document.querySelector('article');

let baseFontSize = '1.20rem';
articleTag.style.fontSize = baseFontSize;

let baseLineHeight = '1.60rem';
articleTag.style.lineHeight = baseLineHeight;

let smallerTextBtn = document.querySelector('.smallerText');
let largerTextBtn = document.querySelector('.largerText');
let shorterLineBtn = document.querySelector('.shorterLine');
let tallerLineBtn = document.querySelector('.tallerLine');

smallerTextBtn.addEventListener('click', changeArticleStyle);
largerTextBtn.addEventListener('click', changeArticleStyle);
shorterLineBtn.addEventListener('click', changeArticleStyle);
tallerLineBtn.addEventListener('click', changeArticleStyle);

let textSizeLabel = document.querySelector('.textSize');
textSizeLabel.innerText = baseFontSize;

let lineHeightLabel = document.querySelector('.lineHeight');
lineHeightLabel.innerText = baseLineHeight;

function changeArticleStyle(event) {
  let targetClass = event.target.classList[0];
  let currentTextSize = parseFloat(articleTag.style.fontSize);
  let currentLineHeight = parseFloat(articleTag.style.lineHeight);

  if (targetClass === 'smallerText') currentTextSize -= 0.05;
  if (targetClass === 'largerText') currentTextSize += 0.05;
  if (targetClass === 'shorterLine') currentLineHeight -= 0.05;
  if (targetClass === 'tallerLine') currentLineHeight += 0.05;

  currentTextSize = currentTextSize.toFixed(2);
  currentTextSize = currentTextSize + 'rem';

  currentLineHeight = currentLineHeight.toFixed(2);
  currentLineHeight = currentLineHeight + 'rem';

  articleTag.style.fontSize = currentTextSize;
  textSizeLabel.innerText = currentTextSize;

  articleTag.style.lineHeight = currentLineHeight;
  lineHeightLabel.innerText = currentLineHeight;
}

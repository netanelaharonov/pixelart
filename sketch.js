let gridSize = 10;
let grid;
let currentColor = "black";

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createGrid();
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(255);
  drawGrid();
  drawColorWheel();
}

function mousePressed() {
  if (mouseX < 50 && mouseY < 50) {
    let h = map(mouseX, 0, 50, 0, 360);
    let s = map(mouseY, 0, 50, 100, 0);
    currentColor = color(h, s, 100);
  } else {
    let x = floor(mouseX / gridSize);
    let y = floor(mouseY / gridSize);
    if (mouseButton === RIGHT) {
      grid[x][y] = "white";
    } else {
      grid[x][y] = currentColor;
    }
  }
}

function mouseDragged() {
  if (mouseX >= 50 || mouseY >= 50) {
    let x = floor(mouseX / gridSize);
    let y = floor(mouseY / gridSize);
    if (mouseButton === RIGHT) {
      grid[x][y] = "white";
    } else {
      grid[x][y] = currentColor;
    }
  }
}

function createGrid() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function drawGrid() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let x = i * gridSize;
      let y = j * gridSize;
      fill(grid[i][j] || "white");
      rect(x, y, gridSize, gridSize);
    }
  }
}

function drawColorWheel() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      let h = map(i, 0, 50, 0, 360);
      let s = map(j, 0, 50, 100, 0);
      fill(h, s, 100);
      rect(i, j, 1, 1);
    }
  }
}

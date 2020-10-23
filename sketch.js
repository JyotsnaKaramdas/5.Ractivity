let shapes = []
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
    if (shape.shapeType == 'triangle') {
      triangle(shape.x, shape.y, 30, 75, 58, 20);

  }
}
}
function mousePressed() {
  addAShape();
}
function keyPressed() {

  shapes.pop()
}
function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red', 'blue', 'green','yellow','pink','purple','orange']),
    shapeType: random(['square', 'circle','triangle'])
  }
  shapes.push(shape1);
}
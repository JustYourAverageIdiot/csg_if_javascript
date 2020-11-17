function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  noLoop();
  background(240,240,240);
  colorMode(RGB,255,255,255,1)
}

function draw() {
  stroke(125,75,25);
  strokeWeight(40);
  rect(225,20,205,205);

  noStroke();
  fill(250,225,175,0.5);
  triangle(0,150,450,0,300,450);

  noStroke();
  fill(175,150,150);
  ellipse(88,362,176);
}

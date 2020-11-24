function setup() {
  canvas = createCanvas(910,200);
  canvas.parent('processing');
  noLoop();
  background('gainsboro');
  angleMode(DEGREES);
  rectMode(CENTER);
  fill('plum');
}

function draw() {
  stroke('lemonchiffon');
  strokeWeight(5);
  translate(30 + 40,100);
  rect(0,0,80,80);
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);  
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80); 
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);  
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);  
  rotate(15);
  translate(80 + 30,0);
  rect(0,0,80,80);  
  rotate(15);
}

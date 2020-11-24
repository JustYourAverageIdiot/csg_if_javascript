var xPlayer = 0 ;
var yPlayer = 375 ;
var BGColor = 'silver';

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(60);
}

function draw() {
    background(BGColor);
    noStroke();
    fill ('black');
    rect(0,425,450,25);
    rect(xPlayer,yPlayer,50,50);

    if (keyIsDown(LEFT_ARROW)) {
        xPlayer -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xPlayer += 5;
    }
}
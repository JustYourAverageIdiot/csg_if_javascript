var xBlokje = 175;
var yBlokje = 0;
var xBlokje2 = 175;
var yBlokje2 = 350;
var yeet = 'silver';

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  frameRate(60);
}



function draw() {
    background(yeet);
    noStroke();
    fill ('darkorange');
    rect(xBlokje,yBlokje,100,100);
    fill ('dodgerblue')
    rect(xBlokje2,yBlokje2,100,100);

    if (keyIsDown(DOWN_ARROW)) {
        yBlokje2 += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        yBlokje2 -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xBlokje2 += 5;
    }

    if (keyIsDown(LEFT_ARROW)) {
        xBlokje2 -= 5;
    }

    if (keyIsDown(83)) {
        yBlokje += 5;
    }

    if (keyIsDown(87)) {
        yBlokje -= 5;
    }

    if (keyIsDown(68)) {
        xBlokje += 5;
    }

    if (keyIsDown(65)) {
        xBlokje -= 5;
    }

    if (xBlokje >= xBlokje2-100 && xBlokje <= xBlokje2 + 100 && yBlokje >= yBlokje2 - 100 && yBlokje <= yBlokje2 + 100) {
        background ('black');
        noLoop();
        noStroke();
        fill ('darkorange');
        rect(xBlokje,yBlokje,100,100);
        fill ('dodgerblue')
        rect(xBlokje2,yBlokje2,100,100);
    }
}
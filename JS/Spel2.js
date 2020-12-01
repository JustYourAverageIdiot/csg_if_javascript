var xPlayer = 0 ;
var yPlayer = 375 ;
var Jump = 5 ; 
var Run = 5 ; 
var BGColor = 'silver';
var PlayerColor = 'black';

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
    fill (PlayerColor);
    rect(xPlayer,yPlayer,50,50);

    if (keyIsDown(RIGHT_ARROW)) {
        RightArm();
    }

    else {
    }

    if (keyIsDown(LEFT_ARROW)) {
        LeftArm();
    }

    else {
    }

    if (keyIsDown(65)) {
        xPlayer -= Run;
    }

    if (keyIsDown(68)) {
        xPlayer += Run;
    }

    if (keyIsDown(87)) {
        yPlayer -= 5;
    }

    if (keyIsDown(83)) {
        yPlayer += 5;
    }

    if (keyIsDown(16)) {
        Run = 10 ; 
        PlayerColor = 'red';
    }

    else {
        Run = 5 ; 
        PlayerColor = 'black';
    }


}
    
function RightArm() {
    push();
    noStroke();
    fill(PlayerColor);
    rect(xPlayer + 50,yPlayer + 15,30,20);
    pop();
}

function LeftArm() {
    push();
    noStroke();
    fill(PlayerColor);
    rect(xPlayer - 30,yPlayer + 15,30,20);
    pop();
}






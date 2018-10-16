var firstFrog;
var secondFrog;
var thirdFrog;
var fourthFrog;

var fly;

function Fly(_x, _y) {
  this.x = _x;
  this.y = _y;

  fill(40);
  stroke(255);
  strokeWeight(2);

  ellipse(_x, _y, 7, 30);
  ellipse(_x, _y, 20, 10);

  line(_x - 5, _y - 4, _x - 5, _y + 4);
  line(_x + 5, _y - 4, _x + 5, _y + 4);
  line(_x, _y - 4, _x, _y + 4);
}

function Frog(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.size = _diameter;
  this.focusX = _x;
  this.focusY = _y - _diameter / 2.5;

  this.angCoef = function(mouseX, mouseY) {
    var m;
    m = (mouseY - this.focusY) / (mouseX - this.focusX);
    return m;
  }

  this.angle = function(m) {
    var alpha;
    alpha = Math.atan(m);
    if (mouseX - this.focusX < 0) {
      alpha = alpha + PI;
    }
    if (mouseX - this.focusX > 0) {
      alpha = alpha;
    }

    return alpha;
  }

  this.pupilPosition = function(alpha) {
    var ro = _diameter / 12;
    var x = ro * Math.cos(alpha);
    var y = ro * Math.sin(alpha);
    return values = [x, y];
  }

  var m = this.angCoef(mouseX, mouseY);
  var alpha = this.angle(m);
  var offset = this.pupilPosition(alpha);
  var xOffset = offset[0];
  var yOffset = offset[1];

  var leftLegX = _x - _diameter / 2.5;
  var leftLegY = _y + _diameter / 4;
  var rightLegX = _x + _diameter / 2.5;
  var rightLegY = _y + _diameter / 4;
  var legDiameter = _diameter / 2;

  var leftEyeX = _x - _diameter / 3;
  var leftEyeY = _y - _diameter / 2.5;
  var rightEyeX = _x + _diameter / 3;
  var rightEyeY = _y - _diameter / 2.5;
  var eyeDiameter = _diameter / 2;

  var lSmallerLegX1 = _x - _diameter / 8;
  var lSmallerLegY1 = _y + _diameter / 4;
  var lSmallerLegX2 = _x - _diameter / 8;
  var lSmallerLegY2 = _y + _diameter / 2;

  var rSmallerLegX1 = _x + _diameter / 8;
  var rSmallerLegY1 = _y + _diameter / 4;
  var rSmallerLegX2 = _x + _diameter / 8;
  var rSmallerLegY2 = _y + _diameter / 2;

  var smileX1 = _x - _diameter / 8;
  var smileX2 = _x + _diameter / 8;

  var pupilOneX = _x - _diameter / 3 + xOffset;
  var pupilOneY = _y - _diameter / 2.5 + yOffset;
  var pupilTwoX = _x + _diameter / 3 + xOffset;
  var pupilTwoY = _y - _diameter / 2.5 + yOffset;
  var pupilDiameter = _diameter / 6;

  fill(40);
  stroke(255);

  //Legs
  ellipse(leftLegX, leftLegY, legDiameter);
  ellipse(rightLegX, rightLegY, legDiameter);

  //Body
  ellipse(_x, _y, _diameter);

  //Eyes
  ellipse(leftEyeX, leftEyeY, eyeDiameter);
  ellipse(rightEyeX, rightEyeY, eyeDiameter);

  //Smile
  line(smileX1, _y, smileX2, _y);

  //Smaller legs
  line(lSmallerLegX1, lSmallerLegY1, lSmallerLegX2, lSmallerLegY2);
  line(rSmallerLegX1, rSmallerLegY1, rSmallerLegX2, rSmallerLegY2);

  //Pupils
  noStroke();
  fill(255);
  ellipse(pupilOneX, pupilOneY, pupilDiameter);
  ellipse(pupilTwoX, pupilTwoY, pupilDiameter);
}

///////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

///////////////////////////////////////////////////////////////////////////////

function draw() {
  background(40);
  stroke(255);
  fill(40);
  strokeWeight(windowHeight / 100);

  line(0, windowHeight - windowHeight / 5, windowWidth, windowHeight - windowHeight / 5);

  firstFrog = new Frog((windowWidth - windowWidth / 5), (windowHeight - windowHeight / 4), windowHeight / 10);
  secondFrog = new Frog((windowWidth - windowWidth / 2.5), (windowHeight - windowHeight / 3.8), windowHeight / 8);
  thirdFrog = new Frog((windowWidth - windowWidth / 1.6), (windowHeight - windowHeight / 3.65), windowHeight / 7);
  fourthFrog = new Frog((windowWidth - windowWidth / 1.2), (windowHeight - windowHeight / 4), windowHeight / 10);

  fly = new Fly(random(mouseX - 50, mouseX + 50), random(mouseY - 25, mouseY + 25));
}

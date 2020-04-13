var random,random1,random2,ball;
function setup() {
  createCanvas(900,600);
  random = createSprite(150,300,300,600);
  random1 = createSprite(450,300,300,600);
  random2 = createSprite(750,300,300,600);
  ball = createSprite(601,601,20,20);
  random.shapeColor = "black";
  random1.shapeColor = "black";
  random2.shapeColor = "black";
  ball.shapeColor = "blue";
  ball.x = World.mouseX;
  ball.y = World.mouseY;
}

function draw() {
    background(0);
    if (ball.isTouching(random)) {
      random.shapeColor = "red";
      random1.shapeColor = "black";
      random2.shapeColor = "black";
    }
    if (ball.isTouching(random1)) {
      random.shapeColor = "black";
      random1.shapeColor = "green";
      random2.shapeColor = "black";
    }
    if (ball.isTouching(random2)) {
      random.shapeColor = "black";
      random1.shapeColor = "black";
      random2.shapeColor = "yellow";
    }
    drawSprites();
}
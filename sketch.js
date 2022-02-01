var ball
var edge 
function setup() {
  createCanvas(600,550);
 ball=createSprite (250,250,15,15)
 ball.shapeColor="green"
 edge=createEdgeSprites()
}

function draw() 
{
  background("orange");

  drawSprites()

ball.bounceOff(edge[0])
if (keyIsDown(LEFT_ARROW)){
  ball.velocityX=-2
}
}





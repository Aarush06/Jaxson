
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}
var path;

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(400,0,100,800);
  rightBoundary.visible = false;
  

  Runner = createSprite(200,300);
  Runner.addAnimation("sahilrunning",RunnerImg);
  Runner.scale = 0.1;
}

function draw() {
background(0);

if(path.y > 400){
  path.y = height/2;
}
Runner.x = World.mouseX

Runner.collide(leftBoundary);
Runner.collide(rightBoundary);


drawSprites();
}

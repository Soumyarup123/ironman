var ironman;
var background;
var ironimg;
var bgimg;

function preload() 
{
  ironimg=loadImage("iron.png");
  bgimg=loadImage("bg.jpg");
}


function setup() {
  createCanvas(1200,600);
  ironman=createSprite(300,300,30,30)
  ironman.addImage(ironimg);
  ironman.scale=0.3;
  edges=createEdgeSprites();
}

function draw() {
  background(bgimg); 
  background.scale=2; 
  ironman.bounceOff(edges[0]);
  ironman.bounceOff(edges[1]);
  ironman.bounceOff(edges[2]);
  ironman.bounceOff(edges[3]);
  if(keyDown("up"))
  {
    ironman.y=ironman.y-10;
  }
  if(keyDown("down"))
  {
    ironman.y=ironman.y+10;
  }
  if(keyDown("left"))
  {
    ironman.x=ironman.x-10;
  }
  if(keyDown("right"))
  {
    ironman.x=ironman.x+10;
  }
  drawSprites()
}

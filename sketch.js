
var shipImage,ship;
var seaImage;

function preload(){


  shipImage= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  
  sea= createSprite(200,200);
  sea.addImage(seaImage);
  sea.scale=0.5;
 
  
  sea.velocityX=-2;

  ship= createSprite(100,200);
  ship.addAnimation("shipmoving",shipImage);
  ship.scale=0.3


  
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x=200
  }
 
  

  drawSprites();
}
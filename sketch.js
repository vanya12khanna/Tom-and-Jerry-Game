var cat, catImg, catImg2, catImg3, catImg4 ;
var mouse, mouseImg, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;

function preload() {
    //load the images here
  
    mouseImg1 = loadAnimation("mouse-1.png");
    mouseImg2 = loadAnimation("mouse-2.png","mouse-3.png");
    mouseImg3 = loadAnimation("mouse-4.png");
    catImg1 = loadAnimation("cat-1.png");
    catImg2 = loadAnimation("cat-2.png","cat-3.png");
    catImg3 = loadAnimation("cat-4.png");

    gardenImg= loadImage("garden.png");

}

function setup(){
     createCanvas(1000,800);
  
    //create tom aka the mouse and jerry aka the cat sprites here
   
  cat = createSprite(200,600);
  cat.addAnimation("catStanding", catImg1);
  cat.scale = 0.1;
  
  mouse = createSprite(870,600);
  mouse.addAnimation("mouseSleeping", mouseImg1);
  mouse.scale = 0.1;
  
}

function draw() {
  background(gardenImg)
    //Write condition here to evalute if tom and jerry collide
  
    if(mouse.x - cat.x < (mouse.width - cat.width)/2)
    { 
        mouse.velocityX = 0;
        mouse.addAnimation("mouseImage4", mouseImg3);
        mouse.x = 350;
        mouse.scale = 0.2;
        mouse.changeAnimation("mouseImage4");
        cat.addAnimation("catImage4", catImg3);
        cat.scale = 0.18;
        cat.changeAnimation("catImage4");
    }  
  
    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.velocityX = -4; 
        mouse.addAnimation("mouseRunning", mouseImg2);
        mouse.changeAnimation("mouseRunning");
        
        cat.addAnimation("catTeasing", catImg2);
        cat.changeAnimation("catTeasing");
    }
}



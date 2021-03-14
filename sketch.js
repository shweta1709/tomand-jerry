var jerry, jerryAnimation;
var tom , tomAnimation;
var cat, catAnimation;
var garden , gardenImage;





function preload() {
    //load the images here

 jerryAnimation = loadAnimation("images/jerryTwo.png","images/jerryThree.png");

 tomAnimation = loadAnimation("images/tomTwo.png","images/tomThree.png");

 catAnimation = loadAnimation("images/tomFour.png");

 mouseAnimation = loadAnimation("images/jerryFour.png");

gardenImage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  garden = createSprite(500,400,10,80);
  garden.scale = 1.2;
  garden.addImage(gardenImage)
   
  tom = createSprite(800,600,8,6);
  tom.addAnimation("tomAnimation",tomAnimation);
  tom.scale =0.2;
  tom.velocityX = -3;


  jerry = createSprite(100,600,3,2);
  jerry.addAnimation("jerryAnimation",jerryAnimation);
  jerry.scale = 0.1;

 jerry.setCollider("rectangle",0,0,width/2,height/2);
 jerry.debug = false;

tom.setCollider("rectangle",0,0,width+30,height/2);
 tom.debug = false;


}

function draw() {

    background(0,0,0);

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("images/tomFour.png",catAnimation);
        tom.changeAnimation("images/tomFour.png");
        tom.velocityX =0;
        jerry.addAnimation("images/jerryFour.png",mouseAnimation);
        jerry.changeAnimation("images/jerryFour.png");
      
        }


   
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}




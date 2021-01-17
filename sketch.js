var mouse,cat,back,mImg1,mImg2;
var gardenImg,catImg1,catImg2,catImg3;
function preload() {
    //load the images here
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


cat = createSprite(800,500,100,100);
cat.shapeColor = "gold";

mouse=createSprite(100,500,100,100 );
mouse.shapeColor = "brown"
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();

if (cat.x-mouse.x<cat.width/2+mouse.width/2){
    cat.velocityX=0;
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5;
}

}

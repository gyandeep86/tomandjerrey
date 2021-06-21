var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(850,650,50,50);
    cat.addAnimation("catl",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(150,650,50,50);
    mouse.addAnimation("mousec",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x <(cat.width-mouse.width)/2){
        cat.addAnimation("cats",catImg3);
        cat.changeAnimation("cats")
        cat. velocityX = 0;

        mouse.addAnimation("mousef",mouseImg3);
        mouse.changeAnimation("mousef");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouset",mouseImg2);
        mouse.changeAnimation("mouset");

        cat.addAnimation("catw",catImg2);
        cat.changeAnimation("catw");
        cat.velocityX = -1.8
     
    }

  
}

var cat, catImg, catWalking, catLaying;

var mouse, mouseImg, mouseLooking, mouseTease;

var garden, gardenImg;

function preload() {
    //load the images here

    catLay = loadImage('cat1.png')

    catWalking = loadAnimation('cat2.png', 'cat3.png');

    catSit = loadAnimation('cat4.png');

    mouseImg = loadImage('mouse1.png');

    mouseTease = loadAnimation('mouse2.png', 'mouse3.png');

    mouseLooking = loadAnimation('mouse4.png');

    gardenImg = loadImage('garden.png');

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,50,50);
    garden.addImage(gardenImg);
    garden.scale = 1;

    cat = createSprite(650,650,50,50);
    //cat.addAnimation('walking',catWalking);
    cat.addImage(catLay);
    cat.scale = 0.2;

    mouse = createSprite(100,650,50,50);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (cat.isTouching(mouse))
    {
        mouse.addAnimation('mouseLooks', mouseLooking);
        mouse.changeAnimation('mouseLooks');

        cat.addAnimation('catSits',catSit);
        cat.changeAnimation('catSits');
    }

    cat.collide(mouse);

    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW)
  {
    cat.velocityX = -5;
    cat.addAnimation('catRunning', catWalking);
    cat.changeAnimation('catRunning');
    mouse.addAnimation('mouseTeaseing', mouseTease);
    mouse.changeAnimation('mouseTeaseing');
  }


}

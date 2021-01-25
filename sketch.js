var canvas;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var music;
var wall1, wall2, wall3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    wall1 = createSprite(400,20,800,10);
    wall1.shapeColor= "yellow";

    wall2 = createSprite(20,100,10,1000);
    wall2.shapeColor= "yellow";

    wall3 = createSprite(785,100,10,1000);
    wall3.shapeColor= "yellow";

    surface1 = createSprite(730,590,200,10);
    surface1.shapeColor= "red";

    surface2 = createSprite(100,590,200,10);
    surface2.shapeColor= "blue";

    surface3 = createSprite(310,590,200,10);
    surface3.shapeColor= "purple";

    surface4 = createSprite(520,590,200,10);
    surface4.shapeColor= "green";

    //create box sprite and give velocity
    
    box = createSprite(700,40,30,30);
    box.shapeColor= "white"; 
    box.velocityY = 6;

}

function draw() {
    background(0);
    //create edgeSprite
    music.play();
    createEdgeSprites();

    box.bounceOff(wall1);
    box.bounceOff(wall2);
    box.bounceOff(wall3);



    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor= "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor= "blue";  
     }

     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor= "purple";  
     }

     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor= "green";  
     }
     
     if(surface3.isTouching(box)) {
         box.shapeColor= "white";
         box.velocity=0;
         music.stop();
     }  
    
    
       drawSprites();

    //add condition to check if box touching surface and make it box
}

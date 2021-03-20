var canvas;
var music;
var edges;
var boxSprite;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("Loopy’s Jazzy Smooth Music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(90,570,150,30);
	 surface1.shapeColor = ("blue");
	 
	 surface2 = createSprite(270,570,150,30);
	 surface2.shapeColor = (rgb(255,128,0));
	 
	 surface3 = createSprite(450,570,150,30);
	 surface3.shapeColor = (rgb(173,0,69,255));
	
	 surface4 = createSprite(630,570,150,30);
	 surface4.shapeColor = (rgb(0,100,24,255));


    //create box sprite and give velocity
    boxSprite = createSprite(random(20,750),5,30);
	 boxSprite.shapeColor = ("white");
	 boxSprite.velocityX = 4;
	 boxSprite.velocityY = -4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box
	 if(surface1.isTouching(boxSprite) && boxSprite.bounceOff(surface1)){
		   boxSprite.shapeColor = ("blue");
	      music.play();
		 }
    if(surface2.isTouching(boxSprite) && boxSprite.bounceOff(surface2)){
		   boxSprite.shapeColor = ("orange");
		 }
	 if(surface3.isTouching(boxSprite) && boxSprite.bounceOff(surface3)){
		   boxSprite.shapeColor = (rgb(173,0,69,255));
		 }
	 if(surface4.isTouching(boxSprite) && boxSprite.bounceOff(surface4)){
		   boxSprite.shapeColor = (rgb(255,128,0));
         music.stop();
		 }
		 
	 boxSprite.bounceOff(edges);
	 
	 
	 
	 drawSprites();
}

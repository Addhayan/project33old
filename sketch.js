const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundimg;
var boyPlaying,boyPlaying2;

var snowFalling,snowFalling2;

function preload(){
 backgroundimg = loadImage("snow1.jpg");
}



function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  boyPlaying = new BoySledding(500,350,50,50);
  boyPlaying2 = new Boysnowman(1000,350,50,50);

  snowFalling = new Snow(random(10,1900),10,50,50);
  snowFalling2 = new Snow2(random(10,1900),10,50,50);
}

function draw() {
  background(backgroundimg);
  Engine.update(engine);
  
  boyPlaying.display();
  boyPlaying2.display();

  drawSprites();
}
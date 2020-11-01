
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(150,250,50,50);
	bobObject2 = new Bob(140,104,140,104);
	bobObject3 = new Bob(200,200,50,50);
	bobObject4 = new Bob(200,200,50,50);
	bobObject5 = new Bob(200,200,50,50);

	roofObject = new Roof(200,200,100,20);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  drawSprites();
 
}




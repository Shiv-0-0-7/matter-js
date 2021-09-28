var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=Bodies.rectangle(0,600,800,20);
World.add(world,ground);
ball=Bodies.circle(200,300,20);
World.add(world,ball);

	Engine.run(engine);
  
}
function KeyPressed(){
	if(keyCode==UP_ARROW){
Matter.Body.applyForce(ball,{x:30,y:20})
	}

		
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




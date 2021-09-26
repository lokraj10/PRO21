const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
let engine;
let world;
var ground,ground_left,ground_right

function preload()
{
	
}

function setup() {
	createCanvas(1900, 1100);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic: false,
		restitution:.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200,200,60,ball_options)
	World.add(world,ball)

	Engine.run(engine);
	ellipseMode(RADIUS)
	ground = new Ground(width/2,1085,width,20)
	ground_right = new Ground(1500,1000,20,150)
	ground_left = new Ground(1200,1000,20,150)
	
}


function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  push();
  ellipse(ball.position.x,ball.position.y,60)
  pop();
  ground.show();
  ground_left.show();
  ground_right.show();

  drawSprites();
  //keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x: 500, y: -500})
		
	}

}

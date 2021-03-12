var box1,box2,box3
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
box1=new Box(600,575,20,100)
box2=new Box(650,625,100,20)
box3=new Box(700,575,20,100)
ball=new Ball(70,575,25)
	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 box1.display()
 box2.display()
 box3.display()
 ball.display()
if(keyDown===UP_ARROW){
	Matter.Body.applyForce(ball.ball,ball.ball.position,{x:0.0000000000001,y:0.0000000000001})
}
}




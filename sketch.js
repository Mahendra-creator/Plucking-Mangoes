const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,stone,ground,boy,m1,m2,m3,m4,m5,constraint 
 

function preload()
{
boy =loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(650,400,300,500)
    stone = new Stone(100,600,40,40)
    constraint = new Slingshot(stone.body,{x : 100, y : 600})
    ground = new Ground(400,700,800,100)
    m1 = new mango(700,200,45)
    m2 = new mango(750,220,45)
    m3 = new mango(720,240,45)
    m4 = new mango(650,300,45)
    m5 = new mango(610,350,45)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display()
  stone.display()
  constraint.display()
  ground.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()

  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)

  image(boy,150,600,100,200)
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  constraint.fly();
}

function keyPressed(){
  if(keyCode === 32){
      constraint.attach(stone.body);
  }
}

function detectCollision(a,b){
   if(b.body.position.x-a.body.position.x<= a.width+b.radius){
    Matter.Body.setStatic(b.body,false)
  }
   }

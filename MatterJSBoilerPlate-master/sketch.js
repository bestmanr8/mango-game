
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,stone, ground, LauncherObject;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg
function preload()
{
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale - 0.1;
	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,15);
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);
	stone = new Stone(150,550,15);
	boyshot = new Shot(stone.body,{x:150,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  tree.display();
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  stone.display()
  bodyshot.display()
  detectCollision(stone,mango1);
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)

  drawSprites();
 
}

function mouseDragged(){
	matter.Body.setPosition(ston.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	boyshot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keycode ===32){
		Matter.body.setPosition(stone.body,{x:150,y:550})
		bodyShot.attach(stone.body);
	}
}
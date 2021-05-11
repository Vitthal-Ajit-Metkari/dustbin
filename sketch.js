const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObj, slingshot;
var world;

//function preload(){}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);
	paperObj= new paper(200,450,40);
	groundObj =new ground(width/2,670,width,20)
	slingshot = new SlingShot(paperObj.body,{x:400, y:400});
	
	var  render = Render.create({
		element: document.body,
		engine: engine,
		options:{
			width: 1200,
			height:700,
			wireframes: false
		}

	});

	Engine.run(engine);
	Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  dustbinObj.display();
  paperObj.display();
  groundObj.display();

}

function mouseDragged() {
	
 Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased(){
	slingshot.fly();
}


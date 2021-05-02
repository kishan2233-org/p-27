
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(250,500,50);
    bob2 = new Bob(310,500,50);
    bob3 = new Bob(370,500,50);
    bob4 = new Bob(430,500,50);
    bob5 = new Bob(490,500,50);

    roof= new Roof(380,150,500,20);
	
    rope1 = new Rope ( bob1.body,roof.body,-20,0);
   World.add(world,rope1);

    rope2 = new Rope (bob2.body,roof.body,-20,0);
    World.add(world,rope2);

    rope3 = new Rope (bob3.body,roof.body,-20,0);
    World.add(world,rope3);

    rope4 = new Rope (bob4.body,roof.body,-20,0);
    World.add(world,rope4);

    rope5 = new Rope (bob5.body,roof.body,-20,0);
    World.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  drawSprites();
 
}




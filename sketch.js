const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var maxdrops=100,drops,umbrella;

function preload(){
    
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
	world = engine.world;
	
    umbrella=new Umbrella(200,610,50,50);
    for(var i=0; i<maxdrops; i++){
      drops.push(new Drops(random(0,400), random(0,400)));
    }

	Engine.run(engine);  
}

function draw(){
    background(225)
    umbrella.display();
    drops.display();
}   


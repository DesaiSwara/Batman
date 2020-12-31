const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events

var maxdrops=100,umbrella;
var drops=[];

function preload(){
    
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
	world = engine.world;
	
    umbrella=new Umbrella(200,610,75,75);

    for(var i=0; i<maxdrops; i++) {
         drops.push(new Drops(random(0,400), random(0,400)));
    }
	Engine.run(engine);  
}

function draw(){
    background(0)
    umbrella.display();

    for (var i = 0; i < drops.length; i++) {
          drops[i].display;
    }
}   


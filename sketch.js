const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone, rubber, iron, diamond;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone (150,150);
    rubber = new Rubber (450,150,100);
    iron = new Iron (750,200);
    diamond = new Diamond (1050,250);
   

}

function draw(){
    background("black");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    diamond.display();
   
 
}
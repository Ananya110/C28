const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango;

var stone, slingshot;
//var gameState="onSling";



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;




    
     
    mango = new Mango(810, 350);
    

   
    tree =  new Tree(810,180,300, PI/2);


    
    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    mango.display();
    tree.display();

    
    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   // if(gameState!=="launched");
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
    //gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
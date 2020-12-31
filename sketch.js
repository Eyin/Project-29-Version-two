const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "onsling";
function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Platform = new Ground(690,275,200,30);

    box1 = new Box(630,235,30,40);
    box2 = new Box(660,235,30,40);
    box3 = new Box(690,235,30,40);
    box4 = new Box(720,235,30,40);
    box5 = new Box(750,235,30,40);

    box6 = new Box(660,195,30,40);
    box7 = new Box(690,195,30,40);
    box8 = new Box(720,195,30,40);

    box9 = new Box(690,155,30,40);

    polygon = Bodies.circle(150,200,50);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon,{x:200, y:200});
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    Platform.display();
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    //this.polygon.fly() = null;
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
        gameState = "onsling";
    }
}
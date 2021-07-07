const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg

function preload(){
polygonImg=loadImage("polygon.png")

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   stand1=new Stand(390,300,250,10)
   stand2=new Stand(700,200,200,10)

    block1=new Box (750,170,30,40);
    block2=new Box (690,170,30,40);
    block3=new Box (630,170,30,40);
    block4=new Box (720,120,30,40);
    block5=new Box (650,120,30,40);
    block6=new Box (690,70,30,40);
    block7=new Box (380,110,30,40);
    block8=new Box (300,270,30,40);
    block9=new Box (360,270,30,40);
    block10=new Box (480,270,30,40);
    block11=new Box (420,270,30,40);
    block12=new Box (450,220,30,40);
    block13=new Box (380,220,30,40);
    block14=new Box (315,220,30,40);
    block15=new Box (410,165,30,40);
    block16=new Box (350,165,30,40);

    ball=Bodies.circle(50,200,20)
    World.add(world,ball);
 
    sling=new SlingShot(this.ball,{x:100,y:200});
    
}

function draw(){
  background("brown")
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,40,40)

  sling.display();

}

function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }
  function mouseReleased(){
     slingShot.fly();
     }

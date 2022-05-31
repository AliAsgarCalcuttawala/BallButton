const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
let engine;
let world;
var w1w2,w3,w4
var button1, button2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  w1=new Ground(200,380,400,15)
  w2=new Ground(200,20,400,15)
  w3=new Ground(20,200,15,400)
  w4=new Ground(380,200,15,400)
  button1=createImg("push.png")
  button1.position(100,100)
  button1.size(20,20)
  button1.mouseClicked(vforce)

  button2=createImg("push.png")
  button2.position(120,100)
  button2.size(20,20)
  button2.mouseClicked(hforce)
  var balloptions= {
    restitution:0.5
  }

  
ball=Bodies.circle(200,200,30,balloptions)

World.add(world,ball)

}

function draw() 
{
  background(51);
  Engine.update(engine);
  w1.display()
  w2.display()
  w3.display()
  w4.display()
ellipseMode(RADIUS)
ellipse (ball.position.x, ball.position.y,30,30)
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
  }

  function hforce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
    
    }


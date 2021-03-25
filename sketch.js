const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var myengine,myworld;
var ground;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
ground = Bodies.rectangle(400, 390, 800, 20,options);
World.add(myworld,ground);
console.log(ground);
var balloptions = {
  restitution: 0.8
}
ball = Bodies.circle(200, 100, 20,balloptions);
World.add(myworld,ball);
console.log(ball);
  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  //drawSprites();
}
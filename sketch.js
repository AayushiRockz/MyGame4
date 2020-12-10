const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var player1,player2,witch;
var backgroundImg,floatingGroundImg, witchImg, silverImg, YatesImg , weaponImg;
var branchGroup;
var Rope;
var blueBox,redBox;
var Score = 0;
var gameState= 0;




 function preload(){

    backgroundImg = loadImage("dream2.png");
    floatingGroundImg = loadImage("myPlot.png");
    witchImg = loadImage("witch.png");
  silverImg = loadImage("bell_in_red.png");
  YatesImg = loadImage("Yates.png");
  weaponImg = loadImage("weapon.png")

    
}

function setup() {
  

 var canvas= createCanvas(displayWidth,displayHeight-140);

 engine = Engine.create();
 world = engine.world;  

 console.log("Hi!! Enjoy my game");


 

 
//  make sprites for characters
  blueBox= createSprite(width/2,height-200,40,40);
  blueBox.shapeColor = "blue";
  blueBox.addImage("fight", YatesImg);
  blueBox.scale = 0.3;

  redBox= createSprite(width/2,height-150,40,40);
  redBox.shapeColor = "red";
  redBox.addImage("bell",silverImg);
  redBox.scale = 0.5;
// red
  player1 = new player(width/2,height-150,40,40);
 
  // blue
  player2 = new player(width/2,height-200,40,40);

 
 

 


  branchGroup = createGroup();

    Rope = new rope(player1.body,player2.body);


  
}

function draw() {

  background("cyan");  
    textSize(30);
    text("instructions : 1.Drag the blue and red box to control the army general and princess respectively. ", displayWidth/2-500, displayHeight/2-200);
    text("2.Drag the blue and red box to control the army general and princess respectively. ", displayWidth/2-450, displayHeight/2-160);
    text("3.Do not let the princess and the general to fall down.", displayWidth/2-450, displayHeight/2-120);
    text("Press Enter to play", displayWidth/2-450, displayHeight/2);


  if(gameState === 0 && keyDown("enter")){
    gameState = 1;
  }
  if(gameState===1){
    background(backgroundImg);  

    fill("black");
    textSize(25);
    text("Keep 'r' pressed to drag the red box with mouse",100,100);
  
    textSize(50);
    text("score:"+Score,1400,100);
  
    fill("red");
     player1.display();
  
     fill("blue");
    player2.display();
  
  
    // players interacting with the steps
    redBox.collide(branchGroup);
    blueBox.collide(branchGroup);
  
   Rope.display();
   
   prize();
   devil();
  
    randomBranches();
  getScore();
    drawSprites();
  }
 
  
}

function mouseDragged (){
  if(keyDown("r")){
    Matter.Body.setPosition(player1.body,{x:mouseX, y:mouseY});
    redBox.x = mouseX;
    redBox.y = mouseY;

  }else{
    Matter.Body.setPosition(player2.body,{x:mouseX, y:mouseY});
    blueBox.x = mouseX;
    blueBox.y = mouseY;
  }

}

function mouseReleased(){
  Rope.fly();
}



function randomBranches(){
  if(frameCount % 60=== 0 ){
    translate(0,0);
   
   var branch = createSprite(20,300,200,20);
   branch.addImage("ground_in_air ",floatingGroundImg);
   branch.scale = 0.455;

   branch.velocityY = 10;


    branch.x = Math.round(random(70,1500));
    branch.y = Math.round(random(100,300));
    branch.lifetime = 55;
    branchGroup.add(branch);

    console.log(branch.y)
  
  }
}
function prize(){
  if(frameCount%500000===0){
    var weapon = createSprite(displayWidth/2,100,30,30);
    weapon.addImage("reward", weaponImg);
    weapon.scale = 0.1;
    weapon.shapeColor = "red";
  }
}

function devil(){
  if(frameCount%400===0){
     // make witch
  witch = createSprite(Math.round(random(0,displayWidth)),Math.round(random(0,250)),20,20);
  witch.addImage("flying",witchImg);

  }
}

 
function getScore(){
  if(frameCount%20===0){
    Score++;
  }
}


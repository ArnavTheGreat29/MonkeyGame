
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground;
var bananaGroup, obstacleGroup
var score;
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
  
 
}



function setup() {
  createCanvas(600,400)
 
  monkey = createSprite(100,300 ,20,20)
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
   ground = createSprite(100,335,1000,10)
}


function draw() {
   background(255)
 
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil((frameCount/frameRate()))
  text("Survival Time: "+survivalTime,100,50)
  
  if(keyDown("space") && monkey.collide(ground)){
    monkey.velocityY = -12
  }
  createBanana();
  createObstacles();
  monkey.velocityY = monkey.velocityY + 0.5
monkey.scale = 0.1
 
  monkey.collide(ground)
  
  drawSprites();
}
function createBanana(){
  if(frameCount%80 === 0){
  banana = createSprite(500,random(100,300),10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime = 150
    bananaGroup.add(banana)
  }
  
}
function createObstacles(){
  if(frameCount%300 === 0){
  obstacle = createSprite(600,315,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -3
    obstacle.lifetime = 190
    obstacleGroup.add(obstacle)
  }
  
}






var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 1200, 15)
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(monkey.velocityY);

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("lightgreen");
  textSize(20);
  fill("black")
   text("SurvivalTime: " + survivalTime, 350, 50);

  monkey.collide(ground);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")&&monkey.y>280) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.6
  survivalTime = survivalTime+ Math.round(frameCount / 80);


  drawSprites()
  spawnObstacles()

  spawnBananas();

}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(200, 200, 10, 10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.1
    banana.velocityX = -3;
    banana.setLifetime = 50;
    bananaGroup.add(banana)
  }

}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 330, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.velocityX = -4
    obstacle.setLifetime=50;
    obstacleGroup.add(obstacle)
  }
}
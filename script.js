var lose = 0;
function preload() {
  //load game assets
}

function setup() {
  createCanvas(1246, 700);
  bunny = createSprite(40, 610, 20, 20);
  bunny.shapeColor = "pink";
  carrot = createSprite(1200, 40, 30, 30);
  carrot.shapeColor = "orange";
  obs1 = createSprite(400, 120, 200, 20);
  obs1.velocityX = 27;
  obs1.shapeColor = "red";
  obs2 = createSprite(400, 170, 200, 20);
  obs2.velocityX = 28;
  obs2.shapeColor = "red";
  obs6 = createSprite(400, 220, 350, 20);
  obs6.velocityX = 20;
  obs6.shapeColor = "red";
  obs3 = createSprite(400, 270, 200, 20);
  obs3.velocityX = 15;
  obs3.shapeColor = "red";
  obs4 = createSprite(400, 320, 200, 20);
  obs4.velocityX = 30;
  obs4.shapeColor = "red";
  obs5 = createSprite(400, 370, 300, 20);
  obs5.velocityX = 10;
  obs5.shapeColor = "red";
  edges=createEdgeSprites();
}

function draw() {
  background("green");

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs1.bounceOff(edges[2]);
  obs1.bounceOff(edges[3]);

  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs2.bounceOff(edges[2]);
  obs2.bounceOff(edges[3]);

  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs3.bounceOff(edges[2]);
  obs3.bounceOff(edges[3]);

  obs6.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);
  obs6.bounceOff(edges[2]);
  obs6.bounceOff(edges[3]);

  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs4.bounceOff(edges[2]);
  obs4.bounceOff(edges[3]);

  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs5.bounceOff(edges[2]);
  obs5.bounceOff(edges[3]);

  if(bunny.isTouching(obs1))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",200,200);
    lose=1;
  }
  if(bunny.isTouching(obs2))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",600,600);
    lose=1;
  }
  if(bunny.isTouching(obs3))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",600,600);
    lose=1;
  }
  if(bunny.isTouching(obs4))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",600,600);
    lose=1;
  }
  if(bunny.isTouching(obs5))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",600,600);
    lose=1;
  }
  if(bunny.isTouching(obs6))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU LOSE",600,600);
    lose=1;
  }

  if(bunny.isTouching(carrot))
  {
    obs6.velocityX=0;
    obs1.velocityX=0;
    obs2.velocityX=0;
    obs3.velocityX=0;
    obs4.velocityX=0;
    obs5.velocityX=0;
    textSize(20);
    stroke("black");
    text("YOU WIN",600,600);
    lose = 1;
  }


  // keyboard controls for player
  if(lose==0)
  {
    if(keyDown("up"))
  {
    bunny.y=bunny.y-8;
  }
  if(keyDown("down"))
  {
    bunny.y=bunny.y+8;
  }
  if(keyDown("left"))
  {
    bunny.x=bunny.x-8;
  }
  if(keyDown("right"))
  {
    bunny.x=bunny.x+8;
  }
  }

  drawSprites();
}

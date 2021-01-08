function createObjects() {
    canvas = createCanvas(800,400);

    block1 = createSprite(0,380,360,30);
    block1.shapeColor = rgb(0,0,255);

    block2 = createSprite(295,380,200,30);
    block2.shapeColor = rgb(255,128,0);

    block3 = createSprite(515,380,200,30);
    block3.shapeColor = rgb(153,0,76);

    block4 = createSprite(740,380,220,30);
    block4.shapeColor = rgb(0,100,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;
}
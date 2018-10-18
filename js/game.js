var snake = null
var initSnakeX = 15, initSnakeY = 15
var snakeHead = null
var food = null


function setup() {
  createCanvas(825, 825);
  scorer = new Scorer()
  snake = new Snake(scorer)
  food = new Food()
  food.create()
  frameRate(10)
}


function draw() {
  background(0)
  snake.draw()
  snake.update()
  if(snake.eat(food))
  	food.create()
  food.draw()
  snake = snake.handleCollision()
  scorer.scoreUpdate()
}


function keyPressed(){
	if ( keyCode == 38) // up
		snake.setVelocity(0, -1)
	else if ( keyCode == 40) // down
		snake.setVelocity(0, 1)
	else if ( keyCode == 37) // left
		snake.setVelocity(-1, 0)
	else if ( keyCode == 39)
		snake.setVelocity(1, 0)
}


function mousePressed(){
	snake.grow()
}
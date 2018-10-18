var snake = null
var initSnakeX = 15, initSnakeY = 15
var snakeHead = null
var hammer = null
// set options to prevent default behaviors for swipe, pinch, etc
var hammerOptions = { preventDefault: true }
var food = null


function setup() {
  createCanvas(825, 825);
  scorer = new Scorer()
  snake = new Snake(scorer)
  food = new Food()
  food.create()
  hammer = new Hammer(document.body, hammerOptions)
  hammer.get('swipe').set({
  	direction: Hammer.DIRECTION_ALL
  })
  hammer.on("swipe", swiped)
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


/*function mousePressed(){
	snake.grow()
}	*/


function swiped(event) {
  if (event.direction == 4) { // right
    snake.setVelocity(1, 0)
  } else if (event.direction == 8) { // up
    snake.setVelocity(0, -1)
  } else if (event.direction == 16) { // down
    snake.setVelocity(0, 1)
  } else if (event.direction == 2) { // left
    snake.setVelocity(-1, 0)
  }
}

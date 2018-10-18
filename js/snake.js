/**
Constructor function to implement the Snake to be used in the game
**/
function Snake(scorer){
	var diameter = 25
	var growControl = 1
	var dir = [['','left',''],['up','','down'],['','right','']]
	var currentDir = 'right'
	this.x = diameter
	this.y = diameter * 2
	this.speed = diameter 
	this.xVel = 1
	this.yVel = 0


	this.body = [createVector(this.x, this.y)]

	this.wrap = function(){
		if( this.x > width)
			this.x = 0		
		if( this.x < 0)
			this.x = width	
		if( this.y > height)
			this.y =  diameter 
		if( this.y == diameter  && this.yVel == -1)
			this.y = height	
	}

	this.grow = function(){

		this.x += this.xVel * this.speed	
		this.y += this.yVel * this.speed
		var currentPos = createVector(this.x, this.y)
		if(growControl == 1)
			this.body.push(currentPos)
		else
			this.body.unshift(currentPos)
			
	}



	function collided(x,y,x1,y1){
		if(dist(x,y,x1,y1) < 0.1)
		{
			scorer.onDeath()
			return true 
		}		
		return false
	}

	this.handleCollision = function(){
		var init = 0
		if(growControl == -1)
			init = 1
		for(var i = init; i < (init + this.body.length -1 ) ; i++)
		{
			if(collided(this.x,this.y, this.body[i].x,this.body[i].y))
				return new Snake(scorer)
		}
		return this
	}

	this.draw = function(){
		fill(255)
		ellipseMode(CENTER)	
		for (var i= 0 ; i < this.body.length ; i++)
		{
			var part = this.body[i]
			ellipse(part.x,part.y,diameter,diameter)
		}	
		this.wrap()
	}

	// right and down
	// left and up 


	this.setVelocity = function(xVel, yVel){
		if(this.xVel*xVel == -1 || this.yVel*yVel==-1)
		{
			growControl*=-1
			if(growControl == -1){
				this.x = this.body[0].x
				this.y = this.body[0].y
			}
			else
			{
				this.x = this.body[this.body.length-1].x
				this.y = this.body[this.body.length-1].y	
			}
		}
		this.xVel = xVel
		this.yVel = yVel
	}

	this.update = function(){
		// update is nothing but growing the snake and removing the tail
		this.grow()
		if(growControl == 1)
			this.body.shift()
		else
			this.body.pop()
	} 

	this.copyPosition = function(otherSnake){
		this.x = otherSnake.x
		this.y = otherSnake.y
	}

	this.eat = function(food){

		//console.log(dist(this.x,this.y,food.x,food.y))
		if(dist(this.x,this.y,food.x,food.y) < 0.1)
		{

			// console.log(dist(this.x,this.y,food.x,food.y))
			this.grow()
			scorer.addScore()
			return true
		}
	}

}

function Food(snake)
{
	this.x = null
	this.y = null
	var diameter = 25

	this.draw = function(){
		fill(255,0,0)
		ellipseMode(CENTER)	
		ellipse(this.x,this.y,diameter,diameter)
		 
	}

	this.create = function(){
		this.x = floor(random(width/diameter) ) * diameter
		this.y = floor(random(2,height/diameter) ) * diameter
		console.log("created ,",this.x,this.y)
	}
}
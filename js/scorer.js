function Scorer(){
	this.score = 0
	this.highScore = 0

	this.onDeath = function(){
		this.highScore = max(this.score,this.highScore)
		this.score = 0
	}

	this.addScore = function(){
		this.score++
	}

	this.scoreUpdate = function(){
		fill(0,255,0)
		textSize(28)
		text("Score : "+this.score,50,20)
		text(" High Score : "+this.highScore,width * 0.69,20)
	}

}
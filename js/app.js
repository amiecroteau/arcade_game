// Enemies our player must avoid
var Enemy = function(x,y) {
  	this.x = x;
	this.y = y + 55;
    this.sprite = 'images/enemy-bug.png';
	this.step=101;
	this.boundary = this.step*5;
	this.resetPos = -this.step;
};


Enemy.prototype.update = function(dt) {
   if(this.x <this.boundary){
	  this.x += 400 * dt; 
	  
   } else{
	   this.x = this.resetPos;
   }
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/*Enemy.prototype.x = function (x){
    this.x = x;
}
Enemy.prototype.y = function (y){
    this.y = y;
}
*/
 
class Hero{
	constructor(){
		//this.x=-15;
		//this.y=450;
		this.sprite = 'images/char-cat-girl.png';
		this.step = 101;
		this.jump = 83;
		this.startX = this.step * 2;
		this.startY = (this.jump * 5)-20;
		this.x = this.startX;
		this.y = this.startY;
		
	}
	
	//draw hero on current x and y coordinates
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	
	handleInput(input){
		switch(input){
			case 'left':
				if (this.x >0){
					this.x -= this.step;
				}
				break;
			case 'up':
				if(this.y>0){
					this.y -= this.jump;
				}
				break;
			case 'right':
				if (this.x < this.step*4){
					this.x += this.step;
				}
				break;
			case 'down':
				if(this.y <this.jump*4){
					this.y += this.jump;
				}
				break;
		}
	}

}

const player = new Hero();	
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies



let allEnemies = [];
let enemiesYposition = [
100,
150,
200,
]

enemiesYposition.forEach(function(y){
	
	
    const bug1 = new Enemy(-101,0, 900);
	const bug2 = new Enemy((-101*4.5),83, 300);
	const bug3 = new Enemy ((-101*2.5), 166, 200);
    
    allEnemies.push(bug1, bug2, bug3);

})


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

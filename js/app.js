var player, allEnemies;
var h3 = document.createElement("h3");
// Enemies our player must avoid
function Enemy (x , y, dir, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.speed = speed;
    if  ( this.dir === -1) { this.sprite = 'images/enemy-bug.png'; }
    else { this.sprite = 'images/enemy-bug.png'; }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = ( 5*101 + this.x + (this.dir*dt*this.speed*30)) % (5*101) ;
    if (this.y === player.y) {
        if ( -50 < (this.x - player.x) &&  (this.x - player.x) < 50) {
            alert ("chodu nalla BC !!!");
            newgame();
        }
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player () {

    this.x = 101*2;
    this.y = 83*4 + 60;
    this.speed = 80;
    this.sprite = 'images/char-boy.png';
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Player.prototype.handleInput = function (stroke) {
    switch (stroke){
        case 'left':
            if ( 0 < this.x ) {
                this.x -= 101;
            };
            break;
        case 'right':
            if ( this.x < 4*101 ) {
                this.x += 101; 
            };
            break;
        case 'down':
            if ( this.y < 83*4 + 60 ) { 
                this.y += 83;
            };
            break;
        case 'up':
            if ( this.y == 60 ) {
                alert("nice bro");
                next();
            }
            this.y -= 83
            break;
};
};

Player.prototype.update = function() {
       
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}



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


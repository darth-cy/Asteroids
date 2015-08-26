(function(){
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  MovingObject = Asteroids.MovingObject = function(attr){
    this.pos = attr.pos; // pos is an array of two numbers.
    this.vel = attr.vel; // vel is an array of two numbers.
    this.radius = attr.radius;
    this.color = attr.color;
    this.game = attr.game;
  }

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    if(this.distance(this, otherObject) < (this.radius + otherObject.radius)){
      return true;
    }else{
      return false;
    }
  }

  MovingObject.prototype.distance = function(object1, object2){
    dx = object1.pos[0] - object2.pos[0];
    dy = object1.pos[1] - object2.pos[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  // MovingObject.prototype.collideWith = function (otherObject) {
  //   if (this.isCollidedWith(otherObject)) {
  //     this.game.remove(this);
  //     this.game.remove(otherObject);
  //   }
  // }







})();

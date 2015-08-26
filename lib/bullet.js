(function () {
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  Bullet = Asteroids.Bullet = function (attr) {
    this.COLOR = "yellow",
    this.RADIUS = 3,
    attr.color = attr.color || this.COLOR,
    attr.radius = attr.radius || this.RADIUS,
    MovingObject.call(this, attr);
    this.constructor = Asteroids.Bullet;
  }

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject.constructor === Asteroids.Asteroid && this.isCollidedWith(otherObject)) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  }

  Bullet.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.pos[0] < 0 || this.pos[0] > this.DIM_X || this.pos[1] < 0 || this.pos[1] > this.DIM_Y) {
      this.game.remove(this);
    }
  }

})();

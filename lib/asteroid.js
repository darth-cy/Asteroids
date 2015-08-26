(function () {
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };


  Asteroid = Asteroids.Asteroid  = function(attr) {
    this.COLOR = "red",
    this.RADIUS = 20,
    attr.color = attr.color || this.COLOR,
    attr.radius = attr.radius || this.RADIUS,
    attr.vel = attr.vel || Asteroids.Util.randomVec(3); // Hard coded velocity. !!!
    MovingObject.call(this, attr);
    this.constructor = Asteroids.Asteroid;
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject.constructor === Asteroids.Ship && this.isCollidedWith(otherObject)) {
      console.log("We are relocating!")
      otherObject.relocate();
      // this.game.remove(this);
      // this.game.remove(otherObject);
    }
  }










})();

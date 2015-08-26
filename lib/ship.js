(function () {
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  Ship = Asteroids.Ship = function (attr) {
    this.COLOR = "blue";
    this.RADIUS = 10;
    attr.color = attr.color || this.COLOR;
    attr.radius = attr.radius || this.RADIUS;
    attr.vel = attr.vel || Asteroids.Util.randomVec(0); // Hard coded velocity. !!!
    MovingObject.call(this, attr);
    this.constructor = Asteroids.Ship;
  }

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function () {
    var velo = this.vel.slice();
    velo = [velo[0] * 2, velo[1] * 2];
    var posit = this.pos.slice();
    var bullet = new Asteroids.Bullet({vel: velo, pos: posit, game: this.game})
    this.game.add(bullet);
  }






})();

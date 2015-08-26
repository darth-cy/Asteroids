(function(){
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  Game = Asteroids.Game = function(dim_x, dim_y){
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y; // WARNING: hard coded window dimension.
    this.NUM_ASTEROIDS = 10; // WARNING: hard coded number of asteroids.
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: this.randomPosition(), game: this})
    ///
  }

  Game.prototype.addAsteroids = function(){
    var thisGame = this;
    for (var i = 0; i < thisGame.NUM_ASTEROIDS; i++) {
      var newAsteroid = new Asteroids.Asteroid({pos: thisGame.randomPosition(), game: thisGame});
      thisGame.add(newAsteroid);
    }
  }

  Game.prototype.add = function (object) {
    if (object.constructor === Asteroids.Asteroid) {
      this.asteroids.push(object);
    } else if (object.constructor === Asteroids.Bullet) {
      this.bullets.push(object);
    }
  }

  Game.prototype.randomPosition = function(){
    var x = Math.random() * this.DIM_X;
    var y = Math.random() * this.DIM_Y;
    return [x, y];
  }

  Game.prototype.draw = function(ctx){
    this.allObjects().forEach(function (thing) {
      thing.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function(){
    this.allObjects().forEach(function(thing){
      thing.move();
    })
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      return [this.DIM_X, pos[1]];
    } else if (pos[0] > this.DIM_X) {
      return [0, pos[1]];
    } else if (pos[1] < 0) {
      return [pos[0], this.DIM_Y];
    } else if(pos[1] > this.DIM_Y){
      return [pos[0], 0];
    } else {
      return pos;
    }
  };

  Game.prototype.checkCollisions = function(){
    var allThings = this.allObjects();
    for (var i = 0; i < allThings.length; i++) {
      for (var j = i + 1; j < allThings.length; j++) {
        if(allThings[i].isCollidedWith(allThings[j])){
          allThings[i].collideWith(allThings[j]);
        }
      }
    }
  }

  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  }

  // Game.prototype.remove = function (object) {
  //   var index = this.allObjects().indexOf(object)
  //   if (index !== -1) {
  //
  //     this.allObjects().splice(index, 1);
  //   }
  // };

  Game.prototype.remove = function (object) {
    if (object.constructor === Asteroids.Asteroid) {
      var index = this.asteroids.indexOf(object);
      this.asteroids.splice(index, 1);
    } else if (object.constructor === Asteroids.Bullet) {
      var index = this.asteroids.indexOf(object);
      this.bullets.splice(index, 1)
    }
  } ;

  Game.prototype.allObjects = function () {
    return this.bullets.concat(this.asteroids).concat(this.ship);
  }







































})();

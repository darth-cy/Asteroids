(function(){
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  GameView = Asteroids.GameView = function(ctx, game, img){
    this.game = game;
    this.ctx = ctx;
    this.img = img;
  }

  GameView.prototype.start = function () {
    var gameView = this;
    window.setInterval((function () {
      gameView.game.step();
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      gameView.ctx.drawImage(gameView.img, 0, 0);
      gameView.game.draw(gameView.ctx);
    }).bind(gameView), 1000 / 20);
    gameView.bindKeyHandlers();
  }

  GameView.prototype.bindKeyHandlers = function () {
    var gameView = this;
    key('w', function () {gameView.game.ship.power([0, -5])}); //WARNING: hard coded vel.
    key('a', function () {gameView.game.ship.power([-5, 0])});
    key('s', function () {gameView.game.ship.power([0, 5])});
    key('d', function () {gameView.game.ship.power([5, 0])});
    key('space', function () {gameView.game.ship.fireBullet()});
  }


























})();

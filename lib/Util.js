(function(){
  if(typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass){
    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  }

  Asteroids.Util.randomVec = function (length) {
    var x = length * Math.random();
    var y = Math.sqrt(length * length - x * x);
    rand = [1, -1];
    x = x * (rand[Math.floor(Math.random() * 2)]);
    y = y * (rand[Math.floor(Math.random() * 2)]);

    return [x, y];
  }



































































})();

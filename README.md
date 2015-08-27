# Asteroids #
This is the classical asteroids game developed using HTML canvas drawing. It functions with intuitive keyboard control built on keymaster.js library.

### Sample Screenshot ###
![asteroids]

[asteroids]: ./images/asteroids.png

### Development Process ###
+ Construct basic game logic using javascript. Implement respective moving object classes and game loop class.
+ Integrate game logic with canvas drawing. Each object has own rendering functions that will make them independently draw themselves on the canvas.
+ Implement keyboard control using the keymaster.js.
The library interprets keyboard input and translate it into a string representation. The string representation ia then fed into the game class to determine appropriate actions.

### How to Run ###
Follow the live link of this game here: [live]

[live]: http://razynoir.github.io/asteroids/

### Development Highlights ###
+ Acceleration: Individual moving objects all have a speed vector that is used to calculate the projectile properties of the object. When any valid control keys are pressed, the speed vector recalculates the current state and changes the trajectory.
+ Detection: The valid keystrokes are strictly limited to prevent unpredictable behaviors. System commands (ESC, Cntl+C) are left out to favor more fundamental control utilities.
+ Object Oriented Design: The canvas does not have aggregated drawing capability over each objects. Instead, each object has a copy of the canvas and independently draw themselves. This prevents feature envy from the canvas and also makes the game logic and canvas logic seperated.

### Future Development Considerations ###
+ More image rich play interface. Currently the objects are all represented by circles. In the future, the ship might have an image and rotate with respect to a head position.
+ More sophisticated collision. Currently the asteroids disappears when hit. It would make more sense if they explode into pieces and transform into smaller asteroids.

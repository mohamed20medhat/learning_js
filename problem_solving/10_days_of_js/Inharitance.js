//extending a class
class Animal {
  constructor(name) {
    this.animalType = "Animal";
    this.name = name;
  }
  type() {
    console.log(this.name, "is type", this.animalType);
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  constructor(name, collarColor) {
    super(name);
    this.animalType = "Dog";
    this.collarColor = collarColor;
  }
  speak() {
    console.log(this.name, "barks.");
  }
  collar() {
    console.log(this.name, "has a", this.collarColor, "collar.");
  }
}

let spot = new Dog("Spot", "red");
spot.type();
spot.speak();
spot.collar();

// Because the Animal constructor only expects one argument,
// only the first value passed to it is used
spot = new Animal("Spot", "white");
spot.type();
spot.speak();
try {
  spot.collar();
} catch (exception) {
  console.log(
    exception.name +
      ": " +
      exception.message +
      " (collar is a method of Dog, not Animal)."
  );
}
//////////////////////////////////////////////////////
//add to the class a function outside that can be accessed by all the instances of the class without rewriting it in the memory
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
//notice that i don't need to pass w and h to the fuction cause it's inhareted from the class directly through the word "this" ==> like if it becomes a global varyable
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

//override the constructor class to make the square 
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(l) {
    super(l, l);
  }
}

//don't forget to look on the hidden code to know more 




























































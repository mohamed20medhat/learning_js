//class can make objects and objects are instance of classes ==> the normal objects in js are an instance of a class called objects-class
function Polygon(arr) {
  this.lengths = arr;
  //creates an enstanse of the function each time i create a new object of the class "repeates itself in memory"
  this.perimeter = function () {
    let sum = 0;
    for (let i = 0; i < this.lengths.length; i++) {
      sum += this.lengths[i];
    }
    return sum;
  };
}

/////////////////////////////
//makes an empty prototype that each object made by this class can access "doesn't repeat itself when i make a new object "
Polygon.prototype.perimeter2 = function(){
  let sum = 0;
    for (let i = 0; i < this.lengths.length; i++) {
      sum += this.lengths[i];
    }
    return sum;
};

///////////////////////////////////////
//Singleton Class Using a Function
//this is a class like object. it's made one time and can't create objects"instance" of it like normal class and therefore it's an object

let lime = new function () {
  this.type = "Mexican lime";
  this.color = "green";
  this.getInformation = function () {
    return "This " + this.type + " is " + this.color + ".";
  };
};

///////////////////////////////////////
//the es6 way to make classes 
let Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//or
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);
///////////////////////////////////////
//static methods that must be used through the class not the objects|| instance of the class 
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
  console.log(p1.distance(p1, p2));
} catch (exception) {
  console.log(exception.name + ": " + exception.message);
}
///////////////////////////////////////
//subClasses and extending another class "super|parent class" to add new functionality or to override old ones
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, "barks.");
  }
}

let spot = new Dog("Spot");
spot.speak();

spot = new Animal("Spot");
spot.speak();


//or 
//functional class
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name, "speaks.");
};

class Dog extends Animal {
  speak() {
    console.log(this.name, "barks.");
  }
}

let spot = new Dog("Spot");
spot.speak();

spot = new Animal("Spot");
spot.speak();

///////////////////////////////////////
//we use the super keyword to call a function of the parent class inside the subClass class 

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, "speaks.");
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name, "barks.");
  }
}

let spot = new Dog("Spot");
spot.speak();









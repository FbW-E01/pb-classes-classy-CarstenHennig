// # Classy

// #### 1. Person Class
// * Create a class called `Person` which accepts the name of a person as a string, and his/her age as a number.
// The `Person` class should have a method called describe which returns a string with the following syntax:
// "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will
// return "John, 19 years old".

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return this.name + ", " + this.age + " years old";
  }
}
const newPerson = new Person("John", 19);
// console.log(newPerson);
console.log(newPerson.describe());

// #### 2. Tick Tock
// Rewrite the following code to use the "class" syntax.
// ```javascript
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {};

//   this.start = function () {
//     render();
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();
// ```

class Clock {
  constructor(template) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }
  start() {
    this.render();
  }
}

let clock = new Clock("h:m:s");
clock.start();

// #### 3. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// * Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// * Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// * Add a method to reset TV so it goes back to channel 1 and volume 50.
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    // this.channel = channel;
    // this.volume = volume;
  }

  changeVolume() {
    return "Volume is: " + Math.floor(Math.random() * 100);
  }
  changeChannel() {
    return "Channel is: " + Math.floor(Math.random() * 50);
  }
  resetTV() {
    this.channel = 1;
    this.volume = 50;
    return (
      "TV resetted! Channel is: " +
      this.channel +
      " and volume is: " +
      this.volume
    );
  }
}

const vol1 = new TV("CNN", 1, 50);
console.log(vol1);
console.log(new TV().changeVolume());
console.log(new TV().changeChannel());
console.log(new TV().resetTV());

// #### *Bonus* 4. Volume
// * Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  volumeCylinder() {
    return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
  }
}
const cyl = new Cylinder(3, 10);
console.log(cyl.volumeCylinder());

// * **Note**: Volume of a cylinder : `V = πr^2h` - r is the radius and h is the height of the cylinder.

// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.hunger = 0;
    this.loneliness = 20;
    this.happiness = 25;
    this.tiredness = 10;
  }
  wait = (minutes) => {
    this.hunger += minutes / 4;
    this.loneliness += minutes / 2;
    this.happiness -= minutes;
    this.tiredness += minutes / 2;
  };
}

const boots = new Cat("Boots", "munchkin");

boots.wait(20);

console.log(boots);

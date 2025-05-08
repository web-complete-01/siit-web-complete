console.log('Constructor Functions in JS');

// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    this.greet = function(){
        console.log(`Hello! My name is ${this.firstName}.`);
    }
  }


const p1 = new Person("John", "Doe", 50, "blue")
p1.greet()
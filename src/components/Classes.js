const title = "Classes";

class Canine {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Bark! Bark! My name is ${this.name}`);
    }
}

class Dog extends Canine {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    greet() {
        console.log(`${this.name} is a good doggy. You're ${this.age} years old.`);
    }
}

const d1 = new Canine("Barky");
// console.log(d1);
// d1.greet();
  
const d2 = new Dog("Toki", 10);
// console.log(d2);
// d2.greet();

const d3 = new Dog("Max", 15);
// console.log(d3);
// d3.greet();

// d3.greet = () => console.log("I\'am special!");
// d3.greet();
  
export function Classes() {
    return (
        <>
            <h1>{title}</h1>
            <h2>{d1.name}</h2>
            <h2>{d2.name} is {d2.age} years old.</h2>
            <h2>{d3.name} is {d2.age}.</h2>
        </>
    );
}
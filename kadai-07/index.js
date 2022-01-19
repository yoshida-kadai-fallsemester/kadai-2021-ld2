class Animal {
    constructor() {
        this.energy = 100
    }
    eat() {
        this.energy = this.energy + 10
    }
}

class Cat extends Animal {
    speak() {
        console.log("meow")
    }
}

class Lion extends Cat {
    speak() {
        console.log("gao-")
    }
}

class Dog extends Animal {
    constructor() {
        super()
        this.energy = 200
    }
    speak() {
        console.log("bow")
    }
    eat() {
        this.energy = this.energy + 20
    }
}

const cat = new Cat()
const dog = new Dog()
cat.speak()
dog.speak()
cat.eat()
dog.eat()
console.log("cat", cat.energy) // 110
console.log("dog", dog.energy) // 220
// 3 important things with Objects:

// Reference type
// Context
// Instantiation

// Reference type
// see notes

// Context - gets confused a lot with SCOPE

// function b () {
//     let a = 4;
// }
// console.log(a)

// Instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Gandalf', 'wizard')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

console.log(wizard2.play())
console.log(wizard2.introduce())
let user = {
    age: 54,
    name: 'John',
    magic: true,
    scream: function () {
        console.log('ahhhhhh!')
    }
}

console.log(user.age) // O(1)
console.log(user.spell = 'abra kadabra') // O(1)
console.log(user.scream()) // O(1)

// O(n/k) -> O(n)

const a = new Map()
const b = new Set()

// Map --> gives you some order
// Set --> no duplicate keys
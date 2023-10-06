// const strings= ['a', 'b', 'c', 'd'];
// const numbers = [1,2,3,4,5];
// // Variable array is somewhere in memory and the computer knows it.
// // When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


// //push
// strings.push('e');

// //pop
// strings.pop();
// strings.pop();

// //unshift
// strings.unshift('x')

// //splice
// strings.splice(2, 0, 'alien');

// console.log(strings)

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage

console.log(strings[2])

// methods to use with arrays
// push - add to the end of array
strings.push('e'); // O(1) - not looping through anything, just adding something to the end
console.log(strings);

// pop - opposite of push - remove last item from the end of the array
strings.pop(); // O(1) - not looping through anything, just removing something from the end
strings.pop();

// unshift - add to the beginning of array
strings.unshift('x'); // O(n) - We just iterated looped through everything and reassigned the indexes. And I did one, two, three, four, five moves or five operations to realign the indexes. And this should give you a hint that is, this operation is O(n). And depending on the size of the array, that's how long it's going to take to do that operation we're looping.

// splice - add something in the array at a point you choose
strings.splice(2,0, 'alien')  // O(n) We looped through half of the array simplified from O(n/2) to remove constants

console.log(strings);



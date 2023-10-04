// Given 2 arrays, create a function that let's a user know (true/false) whether these 2 arrays contain any common items
// For example:

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

// should return false
//----------------

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// should return true

// Follow interview cheat sheet steps through a problem to solve this in front of an interviewer

// 2 parameters - always arrays - no size limit
// return true or false 
// brute force would be 2 nested loops to compare each item in each array = O(n^2) time complexity
// not efficient code doing that way


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// const containsCommonItem = (arr1, arr2) => {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//           return true;
//         }
//       }
//     }
//     return false;
// }                                  

// O(a*b) but it is also O(1) space complexity - we are not creating any new variables in this function
// 

// console.log(containsCommonItem(array1, array2));


// try a better solution

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// arr ==> obj {
// a: true
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

// my steps
const containsCommonItem2 = (arr1, arr2) => {
    // loop through first array and create object where properties = items in the array
    // loop through second array and check if item in second array exists on created object

    // possible ways or solutions to get around errors
    // can we assume always 2 paramaters in the function? - what if pass in a parameter of 0 or null?
    // do checks like if statements - testing the code comes in here so wont do it in the interview - do unit tests later

     // loop through first array and create object where properties = items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
            }
        }

        // loop through second array and check if item in second array exists on created object
        for (let j = 0; j < arr2.length; j++) {
            if(map[arr2[j]]) {
            return true;
            }
        }
        return false;
    }

    console.log(containsCommonItem(array1, array2));

// O(a + b) Time Complexity 
// O(a) Space Complexity because creating a new object and adding the first array into an object, which takes up memory
// so if the interviewer says if there is limited memory or memory is expensive, tell them  that while this solution is faster then the first one in terms of time complexity, its more heavy in terms of space complexity

// Tell interviewer - If the arrays are substantially large and we can get really large arrays, then this solution when it comes to time complexity, is better!


// More readable way in JS to code the above!!
// gpt specifific methods on arrays to see if i can clean up the code and make it more readable

// containsCommonItem2(array1, array2);

const containsCommonItem3 = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item));
} 

console.log(containsCommonItem3(array1, array2)); // true


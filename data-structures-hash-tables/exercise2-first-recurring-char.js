//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// 1. naive approach - the approach that first comes to mind
// nested for loop
function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}  // O(n^2) - time complexity
      // O(1) - space complexity

// console.log(firstRecurringCharacter([1,2]))

// 2. hash table approach 
function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) {
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map);
    }
    return undefined;
}
// O(n) - time complexity
// O(n) - space complexity  - because we are creating a new data structure and holding the values in it so we increased it by n compared to the first function which was O(1) space complexity. but we do have a faster function now.

// console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// My bonus answer
// convert function 1. to detect five and five
const firstRecurringCharacter3 = (input) => {
    const mySet = new Set();
    for (let i = 0; i < input.length; i++) {
        if (mySet.has(input[i])) {
            return input[i];
        }
        mySet.add(input[i]);
    }
    return undefined;
} // O(n) - time complexity and O(n) - space complexitygiven we are creating a new data structure and holding the values in it so we increased it by n compared to the first function which was O(1) space complexity. but we do have a faster function now.

console.log(firstRecurringCharacter3([2,5,5,2,3,5,1,2,4]))
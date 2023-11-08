// Brute force
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

const indices = twoSum([2, 7, 11, 15], 9);
console.log(indices); // This will log [0, 1] to the console.



// Optimized for Big O:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {  // O(n)
    // create an empty Map to store all nums and their respective index
    const numToIndex = new Map();
    // loop over nums
    for (let i = 0; i < nums.length; i++) {
        // store current number
        const currentNum = nums[i];
        // calculate the remainder of target minus current num
        const remainder = target - currentNum;
        // check if our Map already has the remainder in it
        if (numToIndex.has(remainder)) {
            // if it does, then return an array with 
            // the index of the remainder and the current index in our loop
            return [numToIndex.get(remainder), i];
        }
        // set current number to its index in the Map
        numToIndex.set(currentNum, i);
    }
};
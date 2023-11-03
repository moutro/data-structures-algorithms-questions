// create a javascript bubble sort function that takes in an array of numbers and returns the sorted array.

// [
//   99, 44,  6,   2, 1,
//    5, 63, 87, 283, 4,
//    0
// ]

// My solution:
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87,]
// const bubbleSort = (arr) => {
//     let swap = true;
//     while (swap) {
//         swap = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap = true;
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(numbers));

// Andre's solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87,]

const bubbleSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {  // O(n^2)
            if (array[j] > array[j + 1]) {
                // Swap the numbers
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);

// And as you can hear, we have two nested four loops. So that's O(n^2).  but we're not really holding variables to another data structure or holding
//the numbers into other data structures. So the space complexity is O(1). Bubble sort is not the best algorith but it has good space complexity


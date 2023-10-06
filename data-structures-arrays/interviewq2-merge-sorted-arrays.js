// Given two arrays that are sorted.
// Can you merge these two arrays into one big one that's still sorted.

// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]

// const mergeSortedArrays = (arr1, arr2) => {
//     // create an new empty array to hold the merged array
//     const mergedArray = [];
//     // loop through both arrays
//     for (let i = 0; i < arr1.length; i++) {
//         mergedArray.push(arr1[i]);
//     }
//     for (let j = 0; j < arr2.length; i++) {
//         mergedArray.push(arr2[i]);
//     }
//     // sort the merged array
//     return mergedArray.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

const mergeSortedArrays = (array1, array2) => {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // Check input first to avoid errors
    if (array1.length === 0) {
        return array2;
    }

    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item  || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i]
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j]
            j++;
        }
    }

    return mergedArray;

}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
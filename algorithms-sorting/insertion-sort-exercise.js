// insertion sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// my solution
const insertionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let j = i;
        while (j > 0 && array[j - 1] > array[j]) {
            const temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
}

insertionSort(numbers);
console.log(numbers);

// Andre's solution
const insertionSort2 = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // move number to the first position
            array.unshift(array.splice(i, 1)[0]);
    } else {
        // find where number should go
        for (let j = 1; j < i; j++) {
            if (array[i] > array[j - 1] && array[i] < array[j]) {
                // move number to the right
                array.splice(j, 0, array.splice(i, 1)[0]);
            }
        }
    }
}
}

insertionSort2(numbers);
console.log(numbers);
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const selectionSort = (array) => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let lowest = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[lowest]) {
                // update minimum if current is lower than what we had previously
                lowest = j;
            }
        }
        if (i !== lowest) {
            const temp = array[i];
            array[i] = array[lowest];
            array[lowest] = temp;
        }
    }
}

selectionSort(numbers);
console.log(numbers);
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// O(2n) which simplifies to O(n) because we drop all constants like 2, in this case. above.

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

// most people in an interview with say its O(n) > O(2n), drop the constants so it = O(n)
// This is wrong because the 3rd rule states different terms for inputs and the first and the second box are 2 different inputs

// Big O is here O(a + b) or whatever O(boxes1 + boxes2)

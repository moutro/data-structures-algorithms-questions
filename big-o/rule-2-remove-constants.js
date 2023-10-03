const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
    console.log(items[0]);

    const middleIndex = Math.floor(items.length / 2);
    const index = 0;

    while (index < middleIndex) {
    console.log(items[index]);
    index++;
    }

    for(let i = 0; i < halfIndex; i++) {
    console.log('Hi!');
    }
    
}

// O(1 + n/2 + 100) --> O(n) -- Linear Time
// O(n/2 + 1)

// O(n + 1)

// O(n) -- Linear Time

// in this scenario below we have 2 for loops so we need to add them together and it becomes O(2n) which simplifies to O(n)
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}
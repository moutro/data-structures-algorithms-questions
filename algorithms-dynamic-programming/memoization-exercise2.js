function addTo80(n) {
    console.log('long running function');
    return n + 80;
}

function memoizedAddTo80() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long running function test');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log('1', memoized(5));
console.log('2', memoized(6));


// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));
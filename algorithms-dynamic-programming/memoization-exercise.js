function addTo80(n) {
    console.log('long running function');
    return n + 80;
}

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long running function');
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));


// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));
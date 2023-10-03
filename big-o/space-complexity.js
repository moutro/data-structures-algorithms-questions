//#5 Space complexity O(1)
//time complexity of this function is O(n)
//but when comes to space complexity, its O(1) because we are not adding any new variables in this function
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo');
    }
}

boooo([1,2,3,4,5]) // O(1)

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6)) // O(n)
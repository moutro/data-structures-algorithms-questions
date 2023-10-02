//Log all pairs of array
// a with a, a with b, a with c, etc....b with a, b with b, etc....

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

// what is the Big O of this?
// if you see nested loops that means instead of having 2 for loops one after another where we use addition, when you see loops that are nested, we use multiplication (*) instead of addition (+). 
// So this becomes O(n * n)
// when we multiply them becomes O(n^2) >> O to the n power of 2
// O(n2) is called Quadratic Time
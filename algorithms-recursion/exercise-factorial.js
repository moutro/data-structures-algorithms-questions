// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop


function findFactorialRecursive(number) {
  //code here
 if (number === 1 ) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);      // O(n) time and space
}


function findFactorialIterative(number) {           // O(n) time and space
  //code here
  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer *= i;  // shortcut for answer = answer * i;
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
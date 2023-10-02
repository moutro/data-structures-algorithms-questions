// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1) - Constant time -- assignment of a variable
  a = 50 + 3; // O(1) - Constant time -- arithmetic operation

  for (let i = 0; i < input.length; i++) {  // O(n) -- O(input)- Linear time -- iteration over input array
    anotherFunction(); // O(n) -- O(input) - Linear time -- call to another function
    let stranger = true; // O(n) 
    a++; // a + 1  -- O(n) 
  }
  return a; // O(1) - Constant time - return statement
}

funChallenge(); // O(n) where n is the length of the input array.

// we have 3 steps
//3 + n + n + n + n 
BIG O(3 + 4n)  // This we will learn gets simplified to just O(n) since n will be larger than the constants as n approaches infinity.
let counter = 0;
const inception = () => {
    console.log(counter);
    if (counter > 3) {
    return 'done!';
    }
    counter++;
    return inception();
}

console.log(inception());

// 3 rules
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns. One for the base case and one for the recursive case.
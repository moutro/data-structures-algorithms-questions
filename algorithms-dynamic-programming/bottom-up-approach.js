// 0,1,2,3,5,8,13,21,34,55,89,144,233...

let calculations = 0;
function fibonacci(n) {  // time complexity O(2^n)
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {  // time complexity O(n)  .. one drawbback is we increased the space complexity, But as we know, we sometimes need to trade off space complexity for better time complexity.
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
            }
        }
    }
}

// bottom up approach
const fibonacciMaster2 = (n) => {  // And this type of approach avoids recursion
    let answer = [0, 1];  
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}

const fasterFib = fibonacciMaster();

console.log('Slow',fibonacci(35));
console.log('Dynamic Programming',fasterFib(100));
console.log('Dynamic Programming 2',fibonacciMaster2(100));
console.log(`we did ${calculations} calculations`);
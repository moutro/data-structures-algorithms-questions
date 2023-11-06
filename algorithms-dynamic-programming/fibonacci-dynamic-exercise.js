// 0,1,2,3,5,8,13,21,34,55,89,144,233...

let calculations = 0;
function fibonacci(n) {
    calculations++;
   if (n < 2) {
    return n;
   }
   return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
console.log('calculations', calculations);
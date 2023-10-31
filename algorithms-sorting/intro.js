const letters = ['a', 'd', 'e', 'i', 'o', 'u'];
const basket = [2, 65, 34, 2, 1, 7, 8];

const spanish = ['único', 'árbol', 'cosas', 'fútbol']

basket.sort(function (a, b) {
    return a - b;
});


console.log(basket);

// console.log(spanish.sort(function (a, b) {
//     return a.localeCompare(b);
// }));

// console.log('65'.charCodeAt(0));
// console.log('2'.charCodeAt(0));
// console.log('34'.charCodeAt(0));
// console.log('7'.charCodeAt(0));
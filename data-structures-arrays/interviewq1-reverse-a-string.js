// Interview question:
// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH

function reverse(str) {
    // check the input first
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmmm, thats not good';
    }
    
    const backwards = [];
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join('');
}

console.log(reverse('Hi My name is Andrei'));


function reverse2(str) {
    return str.split('').reverse().join('');
    }


const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');


console.log(reverse4('Hi My name is JSON'));
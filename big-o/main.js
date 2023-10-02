// const nemo = ['nemo'];
// const large = new Array(100).fill('nemo');

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }

// }
 
//   findNemo(large); // O(n)  --> Linear Time

//   const compressFirstBox = (boxes) => {
//       console.log(boxes[0]);
//   }

  
const boxes = [0,1,2,3,4,5];
const logFirstTwoBoxes = (boxes) => {
      console.log(boxes[0]);  // O(1)
      console.log(boxes[1]);  // O(1)
  }

  logFirstTwoBoxes(boxes); // O(2)
const nemo = ['nemo'];
const everyone = ['dory','bruce','marlin','nemo', 'gill','bloat','nigel','squirt','darla','hank'];

const large = new Array(100).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('running');
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }

}

findNemo(everyone);
 
// this function runs 10 times even after 4ht iteration when nemo is found. This is not efficient.
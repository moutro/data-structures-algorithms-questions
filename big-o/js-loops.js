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

const findNemo2 = array => {
    array.forEach(fish => {
        if(fish === 'nemo') {
            console.log('Found NEMO!');
        }
    })
}

findNemo2(everyone);


const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo3(everyone);

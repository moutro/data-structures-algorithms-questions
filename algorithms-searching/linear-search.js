// some different ways in JS to do a search:
// these are all linear searches

const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));

console.log(beasts.findIndex(function(item){
  return item === 'Godzilla';
}));


console.log(beasts.find(function(item){
  return item === 'Godzilla';
}))

console.log(beasts.includes('Godzilla'))


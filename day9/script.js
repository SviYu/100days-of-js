const dogs =[
  {
    name: 'Snickers',
    age: 2
  },
  {
    name: 'Hugo',
    age: 8
  }
]

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px'
}

//Regular 
console.log('Hello!');

//Interpolated
console.log('Hello %s. I`m your friend!', 'Peter');

//Styled
console.log('%c It is a very big font!', 'font-size: 30px; background: blue; color: white');

//Warning
//console.warn('Oh Noooo!');

//Error
//console.error('Your mistake!');

//Info
console.info('Crocodiles eat 3-4 people per year!');

//Testing
  //console.assert(1 === 2, 'That is wrong!')

//Clearing
console.clear();

//Viewing DOM Elements
/* console.log(p);
console.dir(p); */

//Grouping things together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
    console.log(`This is a ${dog.name}.`)
    console.log(`${dog.name} is ${dog.age} years old.`)
    console.log(`${dog.name} is ${dog.age * 2} dog years old.`)
  console.groupEnd(`${dog.name}`)
})

//Counting
console.count('Pete');
console.count('Pete');
console.count('Mike');
console.count('Pete');
console.count('Mike');
console.count('Mike');
console.count('Pete');
console.count('Mike');
console.count('Pete');
console.count('Pete');
console.count('Pete');
console.count('Pete');
console.count('Pete');

//Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data)
  });

console.table(dogs)


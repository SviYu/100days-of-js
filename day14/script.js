// start with strings, numbers and booleans

    // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('players', players)

    // and we want to make a copy of it.

    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
const team1 = players.slice();
team1[2] = 'Howard'

console.log('team1', team1)

    // one way

    // or create a new array and concat the old one in
const team2 = [].concat(players);
team2[0] = 'Tom';
console.log('team2', team2)

    // or use the new ES6 Spread
const team3 = [...players];
team3[1] = 'Alica'
console.log('team3', team3)

const team4 = Array.from(players);
team4[0] = 'Wuhaaa'
console.log('team4', team4)
console.log(players)

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

    // and think we make a copy:
/* const person1 = person;
person1.number = 100
console.log('person1', person1) */


    // We will hopefully soon see the object ...spread
const person1 = { ...person }
person1.city = 'New York'
console.log('person1', person1)

    // how do we take a copy else?

const person2 = Object.assign({}, person, { address: 'Hallway, 2' });
console.log('person2', person2)

//or just Object.assign({}, person), but it clones only first level of data.

const person3 = JSON.parse(JSON.stringify(person));
person3.social = { twitter: '@twitter', facebook: 'facebook_dev' };
console.log('person3', person3)

console.log('person', person);

    

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

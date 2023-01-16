const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    //Array.some(); Is someone is older then 19?
const isAdult = people.some( person => {
  const currentYear = (new Date().getFullYear())
  return currentYear - person.year >= 19
})
console.log({ isAdult })
    
    //Array.every(); Is every older then 19?
const allAdults = people.every( person => {
  const currentYear = (new Date().getFullYear())
  return currentYear - person.year >= 19
})
console.log({ allAdults })
    
//Array.find(); Find the comment with id= 823423
const comment = comments.find(comment => {
  return comment.id == '823423'
} )
console.log(comment)

//Array.findIndex(); Find the comment with this id & delete the comment with 823423 id
const index = comments.findIndex(comment => {
  return comment.id === 823423
})
console.log(index)

//comments.splice(index, 1);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]

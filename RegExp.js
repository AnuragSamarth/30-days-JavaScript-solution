                                                              // // Exercises: Level 1

// // Q1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
let totalAnnual = 0;
let result = text.match(/\d+/g);
result.forEach((val)=> totalAnnual += +(val));
console.log(totalAnnual);



// // Q2.  The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const text2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
let sortingPoint = text2.match(/\d+/g);
sortingPoint = sortingPoint.map((elements) => {
    return Number(elements)
})
const distBtwTwoPart = (arr) => {
    let distBtw = arr[arr.length - 1] - arr[0]
    return distBtw
}
console.log(distBtwTwoPart(sortingPoint));
console.log(sortingPoint)


// // Q3.  Write a pattern which identify if a string is a valid JavaScript variable. 
const pattern = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/
const is_Valid_Variable = (str) => {
    console.log(pattern.test(str));
}
is_Valid_Variable('first_name')
is_Valid_Variable('first_name') 
is_Valid_Variable('first-name') 
is_Valid_Variable('1first_name') 
is_Valid_Variable('firstname')


                                                       // Exercises: Level 2

// // Q4.  Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
let str = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function findMostRepeatedWord(str) {
  let words = str.match(/\w+/g);
  console.log(words); // [ 'How', 'do', 'you', 'do' ]
  let occurances = {};
  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }
  console.log(occurances);
}
findMostRepeatedWord(str);

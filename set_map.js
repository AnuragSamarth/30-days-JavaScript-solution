const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// // // Q1.  create an empty set.
// const emptySet = new Set();
// console.log(emptySet);


// // // Q2.  Create a set containing 0 to 10 using loop. 
// const num = [0,1,2,3,4,5,6,7,8,9,10,5];
// const setNum = new Set();
// for(const number of num){
//     setNum.add(number);
// }
// console.log(setNum);


// // // Q3.  Remove an element from a set. 
// const name = ['Anu','Anurag','Kunal','Aditya'];
// const setName = new Set(name);
// setName.delete('Aditya');
// console.log(setName);


// // // Q4.  Clear a set. 
// const num = [0,1,2,3,4,5,6];
// const setNum = new Set(num);
// setNum.clear();
// console.log(setNum);


// // // Q5.  Create a set of 5 string elements from array. 
// const name = ['anu','kunal','anurag','aditya','nice'];
// const setName = new Set(name);
// setName.forEach(o => {
//     return console.log(o);
// });


// // // Q6.  Create a map of countries and number of characters of a country. 
// let mapOfCountries = new Map();
// for(const country of countries) {
//    mapOfCountries.set(country, country.length);
// }
// console.log(mapOfCountries);



                                                      // // Exercises:Level 2
// // //  Q7. Find a union b
// let c = [...a , ...b];
// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);


// // // Q8.  Find a intersection b. 
// let A = new Set(a);
// let B = new Set(b);
// let c = a.filter((num)=> B.has(num));
// let C = new Set(c);
// console.log(C);


// // // Q9.  Find a with b. 
// let A = new Set(a);
// let B = new Set(b);
// let c = a.filter((num)=> !B.has(num));
// let C = new Set(c);
// console.log(C);



 
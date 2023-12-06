// Exercises: Level 1

// Q1.  Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let val = prompt("Enter your age :");

if(val>=18){
    alert(`Your are old enough to drive`);
} else {
    alert(`Wait for the number of years he need to turn 18 first`);
}


// Q2.  Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = prompt(`Enter your age`);
let yourAge = prompt(`Enter your age`);

if(myAge > yourAge){
    console.log(`I am the older than you`);
}else{
    console.log(`No! I am the older then you`);
}


//  Q3.   If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.

using if else
let a = 4;
let b = 3;
if(a>b){
    console.log(`${a} is greater then ${b}`)
} else{
    console.log(`${b} is greater then ${a}`)
}


using ternary operator. :- ternary operator always return a value because we declired a variable.
let a = 4;
let b = 30;
const result = (a > b) ? `${a} is greater then ${b}` : `${b} is greater then ${a}`;
console.log(result);


// Q4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let result = prompt(`Enter the number`);
if(result % 2 === 0){
    console.log("The number is even");
    alert(`The number is even`);
}else{
    console.log("The number is odd");
    alert(`The number is odd`);
}


// Exercises: Level 2
// Q1. Write a code which can give grades to students according to theirs scores: 1)if else if  2)switch case
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

const scores = prompt(`Enter the scores`);
if(scores>=80 && scores<100){
    console.log(`The grade of student is A`)
}else if(scores >= 70 && scores<89){
    console.log(`The grade of student is B`)
}else if(scores >= 60 && scores < 69){
    console.log(`The grade of student is C`)
} else if(scores>=50 && scores < 59){
    console.log(`The grede of student is D`)
}else if(scores>=0 && scores < 49){
    console.log(`The grade of student is F`)
}

const scores = prompt(`Enter the scores`);
switch(true){
    case scores>=80 && scores<100 :
         console.log(`The grade of student is A`);
         break;
    case scores>=70 && scores<89 :
        console.log(`The grade of student is B`);
        break;
    case scores>=60 && scores<69 :
        console.log(`The grade of student is C`);
        break;
    case scores>=50 && scores<59 :
        console.log(`The grade of student is D`);
        break;
    case scores>=0 && scores < 49 :
        console.log(`The grade of student is F`);
        break;
    default:
        console.log(`Plz.. Enter the scores`);
        break;
}

// Q2.  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring.
// June, July or August, the season is Summer.

const season = prompt(`Enter the season`);
if(season === 'September' || season === 'October' || season === `November`){
    console.log(`The season is Autumn`);
} else if(season === 'December' || season === 'January' || season === 'February'){
    console.log(`The season is winter`);
} else if(season === 'June' || season === 'July' || season === 'August'){
    console.log(`The season is Spring`);
} else {
    console.log(`There is no seasons...`);
}

// Q3.  Check if a day is weekend day or a working day. Your script will take day as an input.

const day = prompt(`Enter the day`);
const inputDay = day.toLowerCase();

if(inputDay === `sunday`){
    console.log(`weekend day`);
}else if(inputDay === `saturday`){
    console.log(`weekend day`);
}else if(inputDay === `monday`){
    console.log(`working day`);
}else if(inputDay === `tusday`){
    console.log(`working day`);
} else if(inputDay === `wednesday`){
    console.log(`working day`);
}else if(inputDay === `thusday`){
    console.log(`Working day`);
}else if(inputDay === `friday`){
    console.log(`working day`);
}

const day = prompt(`Enter the day`);
const inputDay = day.toLowerCase();

switch(inputDay){
    case 'sunday':
        console.log('Weekend day');
        break;
    case 'saturday':
        console.log('weekend end');
        break;
    case 'monday':
        console.log('working day');
        break;
    case 'tusday':
        console.log('working day');
        break;
    case 'wednesday':
        console.log('working day');
        break;
    case 'thusday':
        console.log('working day');
        break;
    case 'friday':
        console.log('working day');
        break;
}

// Q4.  Write a program which tells the number of days in a month.

let a = prompt('Enter the month:');

let b = a.charAt(0).toUpperCase();

let c = a.slice(1, a.length).toLowerCase();

let Month = (b + c);

if ('January' === Month || 'March' === Month || 'May' === Month || 'July' === Month || 'Agust' === Month || 'October' === Month || 'December' === Month) {
console.log(`${Month} has 31 days`)
}
else if ('February' === Month) {
console.log(`${Month} has 28 days`);
}
else if ('April' === Month || 'June' === Month || 'September' === Month || 'November' === Month) {
   console.log(`${Month} has 30 days`)
}
else{
console.log('Re-Enter');
}

// Q5.  Write a program which tells the number of days in a month, now consider leap year.
  let a = prompt(`Enter the month: `);
  let b = a.charAt(0).toUpperCase();
  let c = a.slice(1 , a.length).toLowerCase();
  let year = parseInt(prompt(`Enter the year`));

  let Month = (b + c);
  if ('January' === Month || 'March' === Month || 'May' === Month || 'July' === Month || 'Agust' === Month || 'October' === Month || 'December' === Month) {
    console.log(`${Month} has 31 days`);
  } else if ('April' === Month || 'June' === Month || 'September' === Month || 'November' === Month) {
       console.log(`${Month} has 30 days`)
  } else if ('February' === Month){
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(`${Month} has 29 days in ${year}.`);
      } else {
        console.log(`${Month} has 28 days in ${year}.`);
  }}
else{
    console.log('Re-Enter the month');
}

                                                             // Exercises: Level 1
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
 const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const products = [
   { product: 'banana', price: 3 },
   { product: 'mango', price: 6 },
   { product: 'potato', price: ' ' },
   { product: 'avocado', price: 8 },
   { product: 'coffee', price: 10 },
   { product: 'tea', price: '' },
 ]


//  Q1.  Use forEach to console.log each country in the countries array.
countries.forEach(num => console.log(num)); 


// Q2. Use forEach to console.log each name in the names array.
names.forEach((name)=> console.log(name));


// Q3.  Use forEach to console.log each number in the numbers array.
numbers.forEach((num)=> console.log(num));


// Q4.  Use map to create a new array by changing each country to uppercase in the countries array.
const countryUpperCase = countries.map((num)=> num.toUpperCase())
console.log(countryUpperCase);


// Q5.  Use map to create an array of countries length from countries array.
const countryLength = countries.map((len)=> len.length);
console.log(countryLength)    
                                             //  OR
 function getLength(str) {
   return str.length;
 }
 const lengthOfCountries = countries.map((country) =>
   getLength(country)
 );
 
 console.log(lengthOfCountries);


// Q6.  Use map to create a new array by changing each number to square in the numbers array. 
const sqrNumber = numbers.map((num)=> num*num);
console.log(sqrNumber);


// Q7.  Use map to change to each name to uppercase in the names array. 
const nameUpperCase = names.map(n => n.toUpperCase());
console.log(nameUpperCase);


// Q8.  Use map to map the products array to its corresponding prices.
const productPrice = products.map(({price})=> price);
console.log(productPrice);
                                    // OR
const productPrice = products.map(n => n.price);
console.log(productPrice);



// // Q9.  Use filter to filter out countries containing land.
const countriesLand = countries.filter((n)=> n.includes('land'));
console.log(countriesLand);


// // Q10.  Use filter to filter out countries having six character. 
const totalCharacter = countries.filter((char) => char.length === 6);
console.log(totalCharacter);


// // Q11.  Use filter to filter out countries containing six letters and more in the country array.
const moreSixLetter = countries.filter((char)=> char.length >= 6);
console.log(moreSixLetter);


// // Q12.  Use filter to filter out country start with 'E'.
const containingE = countries.filter((char)=> char.toUpperCase().includes('E'));
console.log(containingE);


// // Q13.  Use filter to filter out only prices with values.
function getPrice(name) {
    let price;
    products.forEach((element) => {
      if (element.product === name) {
        price = element.price;
      }
    })
    return price;
  }
  const prices = products.map((element) => 
    getPrice(element.product)
  );
  console.log(prices);


// // Q14.  Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists =(arr)=>{
    return arr.filter((a)=> typeof(a) === 'string');
}
console.log(getStringLists([1,'A',3,4,'a']));


// // Q15. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((previousValue , currentValue)=>{
     return previousValue + currentValue;
});
console.log(sum);


// // Q16.  Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries. 
const countriesWithoutLastCountry = countries.slice(0, countries.length - 1);
const lastCountry = countries[countries.length - 1];
const sentence = countriesWithoutLastCountry.reduce((prev, cur) =>
  prev + ', ' + cur
);
console.log(`${sentence} and ${lastCountry} are north European countries.`);


// // Q17.  Use some to check if some names' length greater than seven in names array. 
const sevenLength = names.some(e => e.length >= 7);
console.log(sevenLength);                                    // // true


// // Q18.  Use every to check if all the countries contain the word land. 
const containLand = countries.every((char)=> char.includes('land'));
console.log(containLand);                                     //  // false


// // Q19.  Use find to find the first country containing only six letters in the countries array. 
const onlySixLetter = countries.find(e => e.length === 6);
console.log(sixLetter);


// // Q20.  Use findIndex to find the position of the first country containing only six letters in the countries array. 
const indexSixLetter = countries.findIndex(e => e.length === 6);
console.log(indexSixLetter);


// // Q21.  Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const position = countries.findIndex((e)=> (e === 'Norway'));
console.log(position);


// // Q22. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const position = countries.findIndex(e => e === 'Russia');
console.log(position);



                                                                 // //  Exercises: Level 2
// // Q23.  Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)).
let totalPrice = products.filter(p => typeof p.price != 'string').reduce((prev, curr) => prev + curr.price, 0);
console.log(totalPrice);


// // Q24.  Find the sum of price of products using only reduce reduce(callback). 
let totalPrice2 = products.reduce((sum, obj) => { 
  console.log({sum , obj})               // // debuging code line 
  return typeof obj.price != 'string' ? sum += obj.price: sum;
}, 0);
console.log(totalPrice2);


// // Q25.  Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const country = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://restcountries.eu/data/arg.svg',
    currency: 'Argentine peso'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://restcountries.eu/data/arm.svg',
    currency: 'Armenian dram'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://restcountries.eu/data/abw.svg',
    currency: 'Aruban florin'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://restcountries.eu/data/aus.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://restcountries.eu/data/aut.svg',
    currency: 'Euro'
  },]
const categorizeCountries = (arr)=>{
          const countriesArray = arr.filter(({name})=> name.includes('land'));
          return countriesArray; 
}
console.log(categorizeCountries(country));


// // Q26.  Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countries = [
  {name: 'Ukraine'},
  {name: 'Bulgaria'},
  {name: 'Cyprus'},
  {name: 'Andorra'},
  {name: 'United Kingdom'},
  {name: 'Canada'}
]
const getStartingLetters = arr => {
  const occurences = arr
    .reduce((acc, {name}) => {
      const startingLetter = name[0]
      acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
      return acc
    }, {})
  
  return Object
    .keys(occurences)
    .sort()
    .map(letter => ({letter, count: occurences[letter]}))
}


console.log(getStartingLetters(countries));


// // Q27.  Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array.
const getFirstTenCountries = (arr)=> arr.slice(0 , 11);
console.log(getFirstTenCountries(country));


// // Q28.  Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries = (arr)=>{
   return arr.slice(-10);
}
console.log(getLastTenCountries(country));


// // Q28.  Find out which letter is used many times as initial for a country name from the countries array.
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"];
const mostCommonInitial = countries.reduce((acc, curr) => {
  const initial = curr[0];
  if (acc[initial]) {
    acc[initial]++;
  } else {
    acc[initial] = 1;
  }
  return acc;
},{});
 const sortedInitials = Object.entries(mostCommonInitial).sort((a, b) => b[1] - a[1]);
 console.log(sortedInitials[0][0]); 
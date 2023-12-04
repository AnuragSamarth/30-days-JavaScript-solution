// Exercise: Level 1
// Q1.  Declare an empty array;
let array = [];

// Q2.  Declare an array with more than 5 number of elements.
  const array = [1,2,3,4,5,6];
  console.log(array);

// Q3.  Find the length of your array?
let array = [1,2,3,4,5,6];
console.log(array.length);

// Q4.  Get the first item, the middle item and the last item of the array.
let array = [1,2,3,4,5];
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);

// Q5.  Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.
let mixedDataTypes = [1,'Anu',3,4,5,6];
console.log(mixedDataTypes.length);

// Q6.  Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);

// Q7.  Change each company name to uppercase one by one and print them out.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);
for(let i=0 ; i<itCompanies.length ; i++){
    let company = itCompanies[i].toUpperCase();
      console.log(company);
}

// Q8.  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const companies = itCompanies.splice(itCompanies.length-1);
console.log(companies);
console.log(itCompanies);
console.log(`${itCompanies.join(" , ")} and Amazon are big IT companies.`);

// Q9.  Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
for(let i=0;i<itCompanies.length;i++){
    if(itCompanies[i]==='Apple'){
      console.log(`The company is exist`)
    }else{
        console.log(`The company is not exist`);
    }
}

// Q10. Filter out companies which have more than one 'o' without the filter method.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newCompanies = [];
for(let i=0; i<itCompanies.length; i++){
    if(itCompanies[i].includes('o')){
          const zeroCount = itCompanies[i].toLowerCase().split('');
        //   console.log(zeroCount)
          let count = 0;
      for(let j=0; j<zeroCount.length; j++){
       if(zeroCount[j] ==='o'){
        count++;
       }
      }
      if(count>1){
        newCompanies.push(itCompanies[i]);
      }
    }
}
console.log(newCompanies);
console.log(itCompanies);

// Q11.  Sort the array using sort() method.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompanies.sort();
console.log(itCompanies);

// Q12.  Reverse the array using reverse() method
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompanies.reverse();
console.log(itCompanies);

// Q13. Slice out the first 3 companies from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newArray = itCompanies.slice(3);
console.log(itCompanies);
console.log(newArray);

// Q14.  Slice out the last 3 companies from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newArray = itCompanies.slice(4);
console.log(newArray);
console.log(itCompanies);

// Q15.  Slice out the middle IT company or companies from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newArray = itCompanies.slice(2,4);
console.log(newArray);
console.log(itCompanies);

// Q16.  Remove the first IT company from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newArray = itCompanies.shift();            //shift:-Removing one array element in the beginning of the array and it's modify the original array.
console.log(newArray);
console.log(itCompanies);
                //   OR
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
const newArray = itCompanies.splice(1,itCompanies.length);
console.log(newArray);

// Q17.  Remove the middle IT company or companies from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompanies.splice(3,1);
console.log(itCompanies);

// Q18.   Remove the last IT company from the array.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompanies.splice(itCompanies.length-1);
console.log(itCompanies);

// Q19.  Remove all IT companies.
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);

Exercise: Level 2

// Q20. First remove all the punctuations and change the string to array and count the number of words in the array.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
console.log(text.length);
const words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
console.log(words);
console.log(words.length);

// Q21.  In the following shopping cart add, remove, edit items.
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');
// console.log(shoppingCart);

// shoppingCart.pop();
// console.log(shoppingCart);

// shoppingCart.push('Sugar');
// console.log(shoppingCart);

shoppingCart[2] = 'Green Tea';
console.log(shoppingCart);

// Q22.  In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['Albania', 'Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
     if(countries.includes('Ethiopia')){
       console.log('ETHIOPIA');
     }else{
        countries.push('Ethiopia');
     }
console.log(countries);

// Q23.   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
}
console.log(webTechs);

// Q24.   Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3
// Q25.
//   The following is an array of 10 students ages:
//   Sort the array and find the min and max age
//   Find the median age(one middle item or two middle items divided by two)
//   Find the average age(all items divided by number of items)
//   Find the range of the ages(max minus min)
//   Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(ages);
let min = Math.min(...ages);
console.log(min);
let max = Math.max(...ages);
console.log(max)
let mid = max - min
console.log(mid)
let average;
let sum=0;
for(let i=0;i<ages.length;i++){
   sum+=ages[i];
}
console.log(sum);
average = sum/ages.length;
console.log(average);

console.log(min-average);
console.log(max-average);

// Q26.  Slice the first ten countries from the countries array.
const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe']
const newArray = countries.slice(0,10);
console.log(newArray);

// Q27.   Find the middle country(ies) in the countries array.
const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe']
let mid = countries[Math.round(countries.length/2)];
console.log(mid);

// Q28.  Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
 const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe']

 let firsthalf;
 let secondhalf;
 let thirdhalf;
 let mid = Math.ceil(countries.length/2);
if(countries.length % 2 === 0){
    firsthalf = countries.slice(0,mid);
    secondhalf = countries.slice(-mid);
}else{
    firsthalf = countries.slice(-mid);
    secondhalf = countries.slice(-mid);
    thirdhalf = countries.slice(countries);
}
console.log(firsthalf);
console.log(secondhalf);
console.log(thirdhalf);

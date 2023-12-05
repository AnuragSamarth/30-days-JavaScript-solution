// // How to Loop through an Array in JavaScript
// // Exercises: Level 1

// // Q1.   Iterate 0 to 10 using for loop, do the same using while and do while loop.
// for(let i=0;i<=10;i++){
//   console.log(i)
// }

// let i=0;
// do{
//  console.log(i)
//  i++;
// }while(i<=10);

// // Q2.  Iterate 10 to 0 using for loop, do the same using while and do while loop.
// for(let i=10;i>=0;i--){
//  console.log(i)
// }

// let i=10;
// do{
//  console.log(i);
//  i--;
// }while(i>=0)

// // Q3.  Iterate 0 to n using for loop.
// let n=10;
// for(let i=0;i<=n;i++){
// console.log(i);
// }

// // Q4.  Write a loop that makes the following pattern using console.log()
// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######

// let n=7
// let str=''
// for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//       str+="#";
//     }
//     str+='\n'
// }
// console.log(str)

// // Q5.  Use loop to print the following pattern:
// // 0 x 0 = 0
// // 1 x 1 = 1
// // 2 x 2 = 4
// // 3 x 3 = 9
// // 4 x 4 = 16
// // 5 x 5 = 25
// // 6 x 6 = 36
// // 7 x 7 = 49
// // 8 x 8 = 64
// // 9 x 9 = 81
// // 10 x 10 = 100

// for(let i=0;i<=10;i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }

// // Q6.  Using loop print the following pattern.
// // i    i^2   i^3
// // 0    0     0
// // 1    1     1
// // 2    4     8
// // 3    9     27
// // 4    16    64
// // 5    25    125
// // 6    36    216
// // 7    49    343
// // 8    64    512
// // 9    81    729
// // 10   100   1000

// for(let i=0;i<=10;i++){
//    console.log(`${i} ${i*i} ${i*i*i}`)
// }

// // Q7.  Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// //Q8.  Use for loop to iterate from 0 to 100 and print only odd numbers.
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 > 0) {
//     console.log(i);
//   }
// }

// //Q9.  Use for loop to iterate from 0 to 100 and print only prime numbers.
// for (let i = 0; i <= 100; i++) {
//   for (let k = 2; k < i; k++) {
//     if (i % k === 0 && i > 1) {
//       console.log(i);
//     }
//   }
// }

// //Q10.  Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum =0;
// for(let i=0;i<=100;i++){
//      sum = sum + i;
// }
// console.log(`The sum of all the 0 to 100 numbers is ${sum}`)


// //Q11.  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sum1 = 0;
// let sum2 = 0;
// for(let i=0;i<=100;i++){
//    if(i%2===0){
//       sum1 = sum1 + i;
//    } else{
//       sum2 = sum2 +i;
//    }
// }
// console.log(`The sum of all evens no. is ${sum1} and odd no. is ${sum2}`);


// //Q12.  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.
// let sum1 = 0;
//  let sum2 = 0;
//  let newArray = [];
//  for(let i=0;i<=100;i++){
//     if(i%2===0){
//        sum1 = sum1 + i;
//     } else{
//        sum2 = sum2 +i;
//     }
// }
// newArray.push(sum1,sum2)
// console.log(newArray);


// //Q13.  Develop a small script which generate array of 5 random numbers. 
// let arr = [];
// for(let i=0;i<=5;i++){
//    let num = Math.floor(Math.random()*10);
//    arr.push(num);
// }
// console.log(arr);


// //Q14.  Develop a small script which generate a six characters random id:
// let char = 'jg4s4789sdnjs333468sdbfhdbjh1793d2df645f65d1316c';
// let randomID = '';
// for(let i=0;i<6;i++){
//    let random = Math.floor(Math.random()*10);
//     randomID += char[random];
// }
// console.log(randomID);


//                         //   Exercises: Level 2
// //Q15.  Develop a small script which generate any number of characters random id:
// let char = 'fglff64849g465v664f4s8c4d6s4a8798f4ds5csd65fdsfsd65f6sd4f6sd4';
// let randomID = '';
// let r = Math.floor(Math.random()*10);
// for(let i=0 ; i<=r ; i++){
//       let random = Math.floor(Math.random()*10);
//       randomID += char[random];
// }
// console.log(randomID);


// //Q16.  Write a script which generates a random rgb color number.
// let red = 0;
// let green =0;
// let blue = 0;
// for(let i=0 ; i<=255 ; i++){
//    red = Math.floor(Math.random()*i);
//    green = Math.floor(Math.random()*i);
//    blue = Math.floor(Math.random()*i);
// }
// console.log(`rgb(${red} ${green} ${blue})`)


// //Q17.  Using the above countries array, create the following new array.
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe']
// const newArray = [];
// for(let i=0;i<=15;i++){
//    newArray.push(countries[i].toUpperCase());
// }
// console.log(newArray);


// //Q18.  Using the above countries array, create an array for countries length'.
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe'];
// const newArray = [];
// for(let i=0;i<=10;i++){
//    newArray.push(countries[i].length);
// }
// console.log(newArray);


// // Q19.  Use the countries array to create the following array of arrays:
// // [
// //    ['Albania', 'ALB', 7],
// //    ['Bolivia', 'BOL', 7],
// //    ['Canada', 'CAN', 6],
// //    ['Denmark', 'DEN', 7],
// //    ['Ethiopia', 'ETH', 8],
// //    ['Finland', 'FIN', 7],
// //    ['Germany', 'GER', 7],
// //    ['Hungary', 'HUN', 7],
// //    ['Ireland', 'IRE', 7],
// //    ['Iceland', 'ICE', 7],
// //    ['Japan', 'JAP', 5],
// //    ['Kenya', 'KEN', 5]
// //  ]
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe'];
// const newArray = [];
// for(let i=0;i<=12;i++){
//     newArray.push([countries[i], countries[i].slice(0,3) , countries[i].length])
// }
// console.log(newArray);


// //Q20.  In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// let newArray = [];
// let oldArray = [];
// for(let i=0; i < countries.length; i++){
//    if(countries[i].includes('LAND')){
//      newArray.push(countries[i]);
//    }else{
//       oldArray.push(countries[i]);
//    }
// }
// console.log(newArray);
// console.log(oldArray);


// //Q21.  In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe'];
// let newArray = [];
// let oldArray = [];
// for(let i=0;i<countries.length;i++){
//     if(countries[i].includes('ia')){
//        newArray.push(countries[i]);
//     }else{
//       oldArray.push(countries[i]);
//     }
// }
// console.log(newArray);
// console.log(oldArray);


// // Q22.  Using the above countries array, find the country containing the biggest number of characters.
// const countries = ['Albania', 'Bolivia','Ethiopia'];
// let newArray = [];
// let oldArray = [];
// for(let i=0;i<countries.length;i++){
//     if(countries[i].length > 7){
//          newArray.push(countries[i]);
//     }else{
//       oldArray.push(countries[i]);
//     }
// }
// console.log(newArray);
// console.log(oldArray);


// //Q23.  Using the above countries array, find the country containing only 5 characters.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
// let newArray = []
// for(let i=0;i<countries.length;i++){
//    if(countries[i].length === 5){
//      newArray.push(countries[i]); 
//    }
// }
// console.log(newArray);


// //Q24.  Find the longest word in the webTechs array. 
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
// let webTechslengths = [];
// for(let i=0;i<webTechs.length;i++){
//        webTechslengths.push(webTechs[i].length);
// }
// let highestNo = Math.max.apply(null , webTechslengths);
// console.log(highestNo);
// console.log(webTechs[webTechslengths.indexOf(highestNo)]);


// //Q25.  Use the webTechs array to create the following array of arrays:
// // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
// let newArray =[];
// for(let i=0;i<webTechs.length;i++){
//     newArray.push([webTechs[i],webTechs[i].length]);
// }
// console.log(newArray);


// //Q26.  Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
// for(let i=0;i<webTechs.length;i++){
//    console.log(webTechs[i]);
// }

// for(let tech of webTechs){
//    console.log(tech);
// }


// //Q27.  This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// const fruit = ['banana', 'orange', 'mango', 'lemon'];
// for(let i=fruit.length-1; i>=0;i--){
//   console.log(fruit[i]);
// }


// //Q28.  Print all the elements of array as shown below.
// const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']];
// const frontEnd = String(fullStack.slice(0,1));
// const backEnd = String(fullStack.splice(1));
// console.log(backEnd);
// console.log(frontEnd);
// console.log(fullStack);

//                                         //  Exercises: Level 3

// //Q29.  Copy countries array(Avoid mutation). 
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe'];
// console.log(countries[0]);
// Object.freeze(countries);
// countries[0] = 'Bharat';
// console.log(countries[0]);


// //Q30.  Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries. 
// const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe','Anu'];
// const sortedCountries = countries.slice().sort();
// console.log(sortedCountries);


// //Q31.  Sort the webTechs array and mernStack array. 
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// webTechs.sort();
// mernStack.sort();
// console.log(webTechs);
// console.log(mernStack);


// // //Q32.  Reverse the countries array and capitalize each country and stored it as an array. 
//  const countries = ['India','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia and Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen', 'Zambia', 'Zimbabwe','Anu'];

// const newArray = [];
// for(let i=0;i<countries.length;i++){
//    newArray.push(countries[i].toUpperCase())
// }
// console.log(newArray.reverse());
                                                          // Exercises: Level 1

const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


// // Q1.  Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBody, waterBoilingTemp] = constants;
console.log(e , pi , gravity ,humanBody , waterBoilingTemp); 


// // Q2.  Destructure and assign the elements of countries array to fin, est, sw, den, nor. 
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)


// // Q3.  Destructure the rectangle object by its properties or keys.
const {width , height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)



                                                 //  Exercises: Level 2

// // Q4.   Iterate through the users array and get all the keys of the object using destructuring. 
for(let {name , scores, skills , age} of users){
    console.log(name , scores , skills , age)
}


// // Q5.  Find the persons who have less than two skills. 
const twoSkills = users.filter(({skills}) => skills.length < 2);
console.log(twoSkills)


                                                //  Exercises: Level 3

// Q6.  Destructure the countries object print name, capital, population and languages of all countries. 
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
      name: 'Cambodia',
      capital: 'Phnom Penh',
      languages: ['Khmer'],
      population: 15626444,
      flag: 'https://restcountries.eu/data/khm.svg',
      currency: 'Cambodian riel'
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
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://restcountries.eu/data/bhs.svg',
      currency: 'Bahamian dollar'
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
      name: 'New Caledonia',
      capital: 'Nouméa',
      languages: ['French'],
      population: 268767,
      flag: 'https://restcountries.eu/data/ncl.svg',
      currency: 'CFP franc'
    },
    {
      name: 'New Zealand',
      capital: 'Wellington',
      languages: ['English', 'Māori'],
      population: 4697854,
      flag: 'https://restcountries.eu/data/nzl.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Nicaragua',
      capital: 'Managua',
      languages: ['Spanish'],
      population: 6262703,
      flag: 'https://restcountries.eu/data/nic.svg',
      currency: 'Nicaraguan córdoba'
    },
    {
      name: 'Niger',
      capital: 'Niamey',
      languages: ['French'],
      population: 20715000,
      flag: 'https://restcountries.eu/data/ner.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Nigeria',
      capital: 'Abuja',
      languages: ['English'],
      population: 186988000,
      flag: 'https://restcountries.eu/data/nga.svg',
      currency: 'Nigerian naira'
    },
  ]

const allCountries = country.forEach(({name, capital,languages,population})=> console.log(name,capital,languages,population));
console.log(allCountries); 


// // Q7.  A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [David , arr ,[, , jsScore , reactScore]] = student;
console.log(David , arr, jsScore, reactScore)


// // Q8.  Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  function convertArrayToObject(arr){
      const ArrToObj = [];
      for(let [name , skills , scores] of arr){
      ArrToObj.push({name , skills , scores});
    }
    return ArrToObj;  
}
console.log(convertArrayToObject(students));


// // Q9.   Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// // Add Bootstrap with level 8 to the front end skill sets
// // Add Express with level 9 to the back end skill sets
// // Add SQL with level 8 to the data base skill sets
// // Add SQL without level to the data science skill sets

const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

  let skillz = {
    bts: {skill: 'Bootstrap', level: 8}, 
    exp: {skill: 'Express', level: 9}, 
    sql: {skill: 'SQL', level: 8}, 
    ds : 'SQL'
 } 

const newStudent = {...student}
for(let i=0; i<skillz.length; i++){
    newStudent.skills[i].push(skillz[i]);
 }
 
 console.log(newStudent)

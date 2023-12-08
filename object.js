                                                                        // Exercises
                                                                        
// Exercises: Level 1

//Q1.  Create an empty object called dog.     // Q2.. Print the the dog object on the console. 
const dog = {};
console.log(dog);


// // Q3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof. 
const dog = {
    name: 'Rock',
    legs: 4 ,
    color : 'black',
    age : 2,
     bark : function(){
      return `woof woof`;
    }
}
console.log(dog.bark());


// // Q4.  Get name, legs, color, age and bark value from the dog object. 
const dog = {
    name: 'Rock',
    legs: 4 ,
    color : 'black',
    age : 2,
     bark : function(){
      return `woof woof`;
    }
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());


// // Q5. Set new properties the dog object: breed, getDogInfo. 
const dog = {
    name: 'Rock',
    legs: 4,
    color: 'black',
    age: 2,
    bark: function(){
        return `woof woof`;
    }
}
dog.breed = 'labra';
dog.getDogInfo = 'Info';
console.log(dog);



                                                             // Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// // Q6.  Find the person who has many skills in the users object.

let userIds = Object.keys(users);                   // // ['Alex','Asab','Brook','Daniel','John','Thomas','Paul']
let userSkills = [];
for (let i = 0; i < userIds.length; i++) {
  userSkills[i] = users[userIds[i]].skills.length;      // // [3,8,5,4,6,4,7]
}
const max = Math.max(...userSkills);                // // we used spread operator here (...userSkills) 
for (let i = 0; i < userIds.length; i++) {
  if (userSkills[i] == max) {
    console.log(userIds[i]);
  }
}
console.log(userIds);
console.log(userSkills);
  

// // Q7. Count logged in users, count users having greater than equal to 50 points from the following object.

let userIds = Object.keys(users);                   // // ['Alex','Asab','Brook','Daniel','John','Thomas','Paul']
let userLogged = [];
let userPoints = [];
let count=0;
for(let i=0; i<userIds.length;i++){
  if(users[userIds[i]].isLoggedIn){
    userLogged.push(userIds[i]);
    if(users[userIds[i]].points >= 50){
      userPoints.push(userIds[i]);
      count++;
    }
  }
 
}
console.log(userLogged);
console.log(userPoints);
console.log(count);


// Q8. Find people who are MERN stack developer from the users object. 

let userIds = Object.keys(users);
let mernStackDev = [];
for(let i=0;i<userIds.length;i++){
    if(users[userIds[i]].skills.includes('React')){
        if(users[userIds[i]].skills.includes('MongoDB')){
          if(users[userIds[i]].skills.includes('Express')){
            if(users[userIds[i]].skills.includes('Node')){
              mernStackDev.push(userIds[i]);
            }
          }
        }
    }
}
console.log(mernStackDev); 
                                                                      // // OR 

let userIds = Object.keys(users);
let userValue = Object.values(users);
let mernStackDev = [];
for(let i=0; i<userIds.length;i++){
  let skill = users[userIds[i]].skills;
  let value = users[userIds[i]];                              // // This line of code store the value of the object if you iterate the object.
    if(skill.includes('React') && skill.includes('MongoDB')&& skill.includes('Express')&& skill.includes('Node')){
      mernStackDev.push(userIds[i]);
    }
    // // console.log(value);
  }
  console.log(mernStackDev);
  

// // Q9. Set your name in the users object without modifying the original users object. 
let copyUser = Object.assign({},users);
copyUser.Name = 'Anurag';
console.log(copyUser);


// // Q10. Get all keys or properties of users object. 
let userKey = Object.keys(users);
console.log(userKey);


// // Q11. Get all the values of users object.
let userValue = Object.values(users);
console.log(userValue);


// // Q12. Use the countries object to print a country name, capital, populations and languages.
const countries = [
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
  },]
  
 for(let i=0;i<countries.length;i++){
     let countryObject = countries[i]
    //  console.log(countryObject);
    console.log('Name:',countryObject.name);
    console.log("Capital:",countryObject.capital);
    console.log('Population:',countryObject.population);
    console.log('Language:',countryObject.languages);
 }
                                                        // OR 
  const country = countries[Object.keys(countries)[0]];              // // This line of code is get the value of the array object if there is not key. 
   
  console.log("Name: ", country.name)
  console.log("Capital: ", country.capital)
  console.log("Population: ", country.population);
  console.log("Languages: ", country.languages);


                                                                       // Exercises: Level 3
// // Q13.  Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName : 'Anurag',
  lastName : 'Samarth',
  income : {
    salary : 5000,
    profit : 1000
  },
  expenses : {
    Bills : 1000,
    shoping : 1000
  },
  totalIncome(){
    let incomeTotal = 0;
    let incomeKey = Object.keys(this.income);
    // console.log(incomeKey)
    for(let i=0;i<incomeKey.length;i++){
      incomeTotal += this.income[incomeKey[i]]
    }
    console.log(incomeTotal);
  },
  totalExpenses(){
  let expensesTotal = 0;
  let expensesKey = Object.keys(this.expenses);
  for(let i=0;i<expensesKey.length;i++){
    expensesTotal += this.expenses[expensesKey[i]]
  }
  console.log(expensesTotal);
  }
}
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())



// //   **** Questions:2, 3 and 4 are based on the following two arrays:users and products () 
let users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  // // Q14.  Imagine you are getting the above users collection from a MongoDB database. 
  // // Q14[a]. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
  const createCollection = (name, email, pass) => {
    for (let i = 0; i < users.length; i++) {
      let signUp = users[Object.keys(users)[i]];
      if (
        signUp.username === name &&
        signUp.email === email &&
        signUp.password === pass
      ) {
        return (`username is already exeist`);
      } }
      // // Create a user ID
        let randomNum = `1234567890abcdefghijk`;
        let userIds = [];
        let createDate = new Date();
        for (let i = 0; i < 6; i++) {
          userIds.push(randomNum[Math.floor(Math.random() * randomNum.length)]);
        }
        
        // // Create Current Date and Time
        let currentDate = createDate.toLocaleDateString();
        let currentTime = createDate.toLocaleTimeString();

        
        // // Create Object and push into user Array 
        const newPerson = {
          _id: userIds.join(""),
          username: name,
          email: email,
          password: pass,
          createdAt: `${currentDate} ${currentTime}`,
          isLoggedIn: false,
        };
        users.push(newPerson);
        return users;
      }
  console.log(createCollection("Anu", "Anu123@gmai.com", "jhfkas"));



  // // Q14[b]. Create a function called signIn which allows user to sign in to the application. 
  let signIN = (mail, pswd) => {
    for(const user of users) {
       if(user.email === mail && user.password === pswd) {
          user.isLoggedIn = true;
          return 'You have been signed in!!';
       }  
    }
    return 'Incorrect Email or password';
 }
 console.log(signIN('thomsdjfdsbs.com', '1sjhks3'))
console.log(users);


// // Q15. The products array has three elements and each of them has six properties.
let products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// // Q15[a]  Create a function called rateProduct which rates the product. 
const rateProduct = (name,rating)=>{
     for(const product of products){
       if(product.name === name){
        products.push(product.ratings = rating);
        return products;
       } else{
        return `Product name is does not match`;
       }
     }
}
console.log(rateProduct('Laptop',4))


// // Q15[b] Create a function called averageRating which calculate the average rating of a product.
const averageRating = (name)=>{
      let total = 0;
      let pdt;
      for(const product of products){
        if(product.name === name){
           pdt = product;
        }
      }       
     for(const usr of pdt.ratings){
        total += usr.rate;
     }
     return total/pdt.ratings.length;
}
console.log(averageRating('mobile phone'));



                                                                       // // Exercises

//  // Q1.  Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all';

// Fetch Data from API using Promise then

function countryData(){
     fetch(countriesAPI).then((res)=>{
        if(!res.ok){
            throw Error(res.statusText);
        }
        return res.json();
    }).then((data)=>{
      data.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.languages);
        console.log(element.population);
        console.log(element.area);
      });
    }).catch((error)=> console.log(error))
}
countryData();


// Fetch Data from API using Async Await 

async function countryData() {
  try {
    const res = await fetch(countriesAPI);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    data.forEach((element) => {
      console.log(element.name);
      console.log(element.capital);
      console.log(element.language);
      console.log(element.population);
      console.log(element.area);
    });
  } catch (error) {
    console.log(error);
  }
}
countryData();


                                                              // // Exercises: Level 2
// // Q2.  Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Fetch data using Promise Then
function catsName(){
  fetch(catsAPI).then((res)=>{
    if(!res.ok){
      throw Error(res.statusText)
    }
    return res.json();
  }).then((data)=>{
    data.forEach(element => {
      console.log(element.name);
    });
  }).catch((error)=> console.log(error));
}
catsName();


// // Fetch data using Promise Async Await.
async function catsName(){
  try {
     const res = await fetch(catsAPI);
     if(!res.ok){
      throw Error(res.statusText);
     }
     const data = await res.json();
     data.forEach(element => {
      console.log(element.name);
     });
  } catch (error) {
    console.log(error)
  }
}
catsName();



  

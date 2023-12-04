                                //  Functions

//Q1. Declare a function fullName and it print out your full name.
function fullName(){
    console.log('Anurag Samarth');
}
fullName();


//Q2.  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName , lastName){
     let first = firstName;
     let last = lastName;
     let space = ' ';
     let fullName = first + space + last;
     return fullName;
}
console.log(fullName('Anurag','Samarth'));


//Q3.  Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a,b){
   let sum = a+b;
   return sum;
}
console.log(addNumbers(2,2));


//Q4.  An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(len,wid){
   let area = len * wid;
   return area;
}
console.log(areaOfRectangle(2,2));


//Q5.  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length , width){
    let perimeter = 2*(length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(2,2));


//Q6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height){
   let volume = length*width*height;
   return volume;
}
console.log(volumeOfRectPrism(2,2,2));
                       OR 
const length = (length,width,height)=>{
      return (length*width*height);
}
console.log(length(2,2,2));


//Q7.  Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle. 
function areaOfCircle(r,r){
    const area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(2,2));


//Q8.  Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle. 
function circumference(r){
    let circumference = 2 * Math.PI * r;
    return circumference;
}
console.log(circumference(5));


//Q9.  Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass , volume){
    let density = mass/volume;
    return density;
}
console.log(density(5,2));


//Q10.  Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedObj(distance,totalspeed){
      let speed = distance/totalspeed;
      return speed;
}
console.log(speedObj(10,5));


//Q11.  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass , gravity){
    let weight = mass * gravity;
    return weight;
}
console.log(weight(20,9));


//Q12.  Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(C){
    let F = (C * 9/5) + 32;
    return F;
}
console.log(convertCelsiusToFahrenheit(0));


// Q13.  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function BMI(weight , heigth){
    let bmi = weight / (heigth * heigth);
    if(bmi < 18.5){
    return `${bmi} :- Underweight`;
    } else if(bmi<24.9 && bmi>=18.5){
        return `${bmi} :- Normal weight`;
    } else if(bmi<29.9 && bmi >= 25){
        return `${bmi} :- Overweight`;
    } else{
      return `${bmi} :- Obese`;
    }
}
console.log(BMI(400,500));


// // Q14.   Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// The dates for each season are:
// Spring: March 20 - June 20
// Summer: June 21 - September 21
// Autumn: September 22 - December 20
// Winter: December 21 - March 19

const date = prompt("Enter the Date");                      
const month = prompt("Enter the Month");
function checkSeason(month){
    if(month === 'September' || month === 'October' || month === 'November'){
        return `Autumn`;
    } else if(month === 'December' || month === 'January' || month === 'Febuary'){
       return `Winter`;
    } else if(month === 'March' || month === 'April' || month === 'May'){
      return `Spring`;
    } else if(month === 'June' || month === 'July' || month ==='august'){
      return `Summer`;
    } else{
        return `Invalid input`;
    }
}
console.log(checkSeason(month));


// //Q15.  Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a,b,c){
        if(a>b && a>c){
            return `${a}`;
        } else if(b>a && b>c){
            return `${b}`;
        } else {
            return `${c}`;
        }
}
console.log(findMax(-10,-50,2));



                                                        //   Exercises: Level 2
//Q16. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(item){
     for(const value of item){
         console.log(value)
     }
}
printArray([1,2,3,4]);

function printArray(arr){
    for(let i=0; i<arr.length;i++){
      console.log(arr[i]);
    }
}
printArray([1,2,3,4,5]);


Q17.  Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

let showDateTime = ()=>{
    const date = new Date();
    return date.toLocaleString();         // used toLocaleString menthod 
}
console.log(showDateTime())

              OR 

let showDateTime = ()=> {
    const now  = new Date();

    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();

    let newDate = `0${date}/${month}/${year} ${hour}/${min}`;
    return newDate;
}
console.log(showDateTime());


// Q18. Declare a function name swapValues. This function swaps value of x to y.

let swapValues = (x,y)=>{
     let temp = x;
     let a = y;
     let b = temp;
    return `${a} ${b}`;
}
console.log(swapValues(2,3))


//  Q19. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) =>{
    const reverse = [];
    for(let i = arr.length-1; i>=0 ; i--){
      reverse.push(arr[i]);
    }
    return reverse;
}
console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray(['A', 'B', 'C']))


// Q20.  Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (arr)=> {
      let capitalArr = [];
      for(const item of arr){
        capitalArr.push(item.toUpperCase())
      }
      console.log(capitalArr);
}
capitalizeArray([a,b,c,d]);


// Q21.  Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addelement = [];
const addItem = (arr)=>{
    addelement.push(arr);
    return addelement;
}
console.log(addItem(1));
console.log(addItem(2));


// Q22. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item. 
const removeArray = [1,2,3,4,5];
const removeItem = (arr,index)=>{
    return arr.splice(index,3);
}
console.log(removeItem(removeArray,1));
console.log(removeArray);


Q23.  Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. 
const sumOfNumbers = (number)=>{
    let sumAllNumber = 0;
       for(let i = Math.min(...number); i<=Math.max(...number); i++){
          sumAllNumber+= i;
       }
       return sumAllNumber;
}
console.log(sumOfNumbers([1,10]));


//Q24.  Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (min,max)=>{
    let sumOddsNo = 0;
       for(let i=min; i<=max; i++){
        if (i % 2 == 1){
        sumOddsNo += i;
    }
}
return sumOddsNo;
}
console.log(sumOfOdds(4,9));


//Q25.  Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumofEven = (number)=>{
    let sumEvenNo = 0;
     for(let i=Math.min(...number); i<=Math.max(...number); i++){
        if(i % 2 == 0){
         sumEvenNo += i;
        }
     }
     return sumEvenNo;
}
console.log(sumofEven([1,4]))


//Q26.  Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (number) =>{
    let countEven = 0;
    let countOdd = 0;
    for(let i=0;i<=number;i++){
        if(i%2==0){
            countEven += 1;
        }
        else{
            countOdd += 1;
        }
    }
    console.log(`${countEven} and ${countOdd}`)
}
evensAndOdds(100);


//Q27.  Write a function which takes any number of arguments and return the sum of the arguments. 
const sumAllNumber = (...num)=>{
    let sum = 0;
     for(const x of num){
        sum += x;
     }
     return sum;
}
console.log(sumAllNumber(1,2,3));
console.log(sumAllNumber(1,2,3,4));


//Q28.  Writ a function which generates a randomUserIp.
const randomUserIp = () =>{
    let UserIP = [];
    for(let i=0; i<4; i++){
     UserIP[i] = Math.floor(Math.random() * 255);
    }
     return UserIP.join('.');
}
console.log(randomUserIp());


//Q29.  Write a function which generates a randomMacAddress. 
const randomMacAddress = () =>{
    let macAddress = [];
    let randomAddress = '0123456789abcde';
     for(let i=0; i<=6; i++){
        macAddress[i] = randomAddress.charAt(Math.floor(Math.random() * randomAddress.length)) + randomAddress.charAt(Math.floor(Math.random()*randomAddress.length))
     }
     return macAddress.join(':');
}
console.log(randomMacAddress());


//Q30.  Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = ()=>{
   const randomNumber = '0123456789abcdef'
   const hexaNumber = [];
   for(let i=0;i<6;i++){
     hexaNumber[i] = randomNumber.charAt(Math.floor(Math.random()*17));
   }
   return `#${hexaNumber.join('')}`
}
console.log(randomHexaNumberGenerator());


//Q31.  Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = ()=>{
   const id = `1a2b3c4d5e6f7g8hkdjfkdsbkdf465dag6dsbfjsbda5564sa654dsad5165D46WE`;
   const userId = [];
   for(let i=0;i<7;i++){
    userId[i] = id.charAt(Math.floor(Math.random()*id.length));
   }
   return `${userId.join('')}`;
}
console.log(userIdGenerator());


                                                                //  Exercises: Level 3

// Q32.  Modify the userIdGenerator function. Declare a function name userIdGeneratake any parameter but it takes two inputs using prompt(). One of the icharacters and the second input is the number of ids which are supposed to be generated.

const userIdGeneratake = ()=>{
   let char = Number(prompt(`Enter the length of character :`));
   let num = Number(prompt(`Enter the number of ID's :`));
    let IDS = [];
    const randomNum = `abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    for(let j=0; j<=num ; j++){
    let idNo = [];
    for(let i=0; i<char ; i++){
    idNo.push(randomNum[Math.floor(Math.random()*randomNum.length) - 1]);
    }
    IDS.push(idNo.join(''));
   }
   return IDS;
}
console.log(userIdGeneratake());
                                                                             OR 


const userIdGeneratedByUser = ()=>{
   const num = prompt(`Enter the no. of User Id: `);
   const char = prompt(`Enter the length of UserId: `);

  const generatedUserID = ()=>{
   const randomNum = `abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
   const userId = [];
   for(let i=0 ; i<char ; i++){
      userId.push(randomNum[Math.floor(Math.random()*randomNum.length)]);
   }
   return `${userId.join('')}`;    
}

const noUserId = ()=>{
   const IDS = [];
   for(let j=0; j<num; j++){
      IDS[j] = generatedUserID();
   }
   return IDS;
}
 return noUserId();
}

console.log(userIdGeneratedByUser());


// //Q33.  Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = ()=>{
   const red = Math.floor(Math.random()*255);
   const green = Math.floor(Math.random()*255);
   const blue = Math.floor(Math.random()*255);

   return `rgb(${red} ${green} ${blue})`;
}
console.log(rgbColorGenerator());
                                                            //  OR 
         
const rgbColorGenerator = ()=>{
    const rgb = [];
    for(let i=0;i<3;i++){
      rgb.push(Math.floor(Math.random()*256));
    }
    return `rgb(${rgb.join()})`
}
console.log(rgbColorGenerator());


// //Q34.  Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = ()=>{
    const hexa = `1a2b3c4d5e6f7g8h`;
    const arrayHexa = [];
    const number = prompt(`Enter the number of length of array :`);
    for(let j=0; j<number;j++){
    const hexadecimal = [];
    for(let i=0;i<6;i++){
    hexadecimal.push(hexa[Math.floor(Math.random()*hexa.length)]);
    }
    arrayHexa.push(hexadecimal.join(''));
    }
   return arrayHexa;
}
console.log(arrayOfHexaColors());


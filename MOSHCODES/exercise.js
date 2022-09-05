
//FIRST EXERCISE

//Exercise on how to get the maximum number between 2 values

  // function maxNumber(a, b){
  //    return (a > b) ? a : b;
  // }

 // console.log(maxNumber(7, 9));

//Exercise on how to know if a picture is on Landscape or Portrait
//if ur just looking for the boolean value then just remove the question mark and string literals 

// function isLandScape(width, height){
// return (width > height)? 'Landscape' : 'Portrait';
// }

// console.log(isLandScape(3000, 5000))


 //FizzBuzz algorithm
 
 //const output = Fizzbuzz(15)
 //console.log(output);

//function Fizzbuzz(input){
 //  for(i=1; i<=input; i++){
 //     if(i % 3 === 0 && i % 5 === 0){
 //        console.log(i,'FizzBuzz');// break;
 //        } 
 //        else if(i % 5 === 0) {
 //           console.log(i,'Buzz');
 //        }
 //        else if(i % 3 === 0){
 //           console.log(i,'Fizz');
 //        }
 //        else console.log(i);
         
 //  }
   
   
 //};


 // Exercise on calculating speed limits
 //Speed limit = 70
 // 5 --> 1 point
 // 12 points --> license suspended

 
// checkSpeed(109)

 //function checkSpeed(speed) {
 //  const speedLimit = 70;
 //  const kmPerPoint = 5;

//   if(speed <= speedLimit + kmPerPoint){
 //     console.log('OK');
 //     return;
//   }
 //     const points = Math.floor((speed - speedLimit)/kmPerPoint);
 //     if (points >= 12)
 //     console.log('License Suspended');
 //     else{
 //        console.log('Points: ',points);
 //     }
 //}


//Exercise; display even and odd number



 //  function showNumbers(limit){
 //     for (let i = 0; i <= limit; i++){
 //     const message = (i % 2 === 0) ? 'EVEN': 'ODD';
 //     console.log(i, message);
 //     }
 //  }

 //  showNumbers(10);


 //Exercise for counting Truthy's

// const journo = [4, 6, '', NaN, 8, 'bob'];

 //function countTruthy(journo){
 //  let count = 0;
 //  for (let value of journo)
 //     if(value)
 //     count++;
 //     return count;
 //}

 //console.log(countTruthy(journo));


 //Exercise on String properties

 //const movie = {
//   title: 'Lord of the Rings',
//   director: 'Peter Jackson',
//   rating: 8.6,
//   year: 2001
//  }

//function showProperties(obj){
//   for (let key in obj){
//      if(typeof obj[key] === 'string')
//         console.log(key,obj[key]);
//   }
//}

//showProperties(movie);


//Exercise- Sum of Multiples 3 and 5

//function sum(limit){
//   let sum = 0;
//   for(let i = 0; i <= limit; i++)
//      if(i % 3 === 0 || i % 5 === 0)
//      sum += i;

//   return sum;
//}

//console.log(sum(10)); //Ans: 33


//Exercise- calculating students grades
//first of all calculate the average 
//N.B ALWAYS INDULGE IN THE USE OF SINGLE RESPONSIBILITY PRINICIPLE
//i.e breaking down functions into small function for easy readablity

//const marks = [80, 80, 70];

//function grades(marks){
//   const average = calculateAverage(marks);

//   if (average < 60){ return 'F';}
//   if (average < 70){ return 'D';}
//   if (average < 80){ return 'C';}
//   if (average < 90){ return 'B';}
//   return 'A';
//}

//function calculateAverage(arrays){
//   let sum = 0;
//   for (let value of Object.keys(arrays))
//      sum += value;
//   return sum / arrays.length;
//}

//console.log(grades(70));


//Exercise- Show stars..showing how nested loops work for adding data 

//function showStars(row){
//   for (let i = 1; i <= row; i++){
//      let pattern = '';
//      for (let j = 0; j < i; j++) 
//         pattern += '*';
//         console.log(i,pattern);
//   }   
//}

//showStars(15);



//Exercise- Show prime numbers (divisible by 1 and itself)

//function showPrimes(limit){
//  for (let number = 2; number <= limit; number++)
//  //number starts from 2 cause every number can be divided by 1.
//  if(isPrime(number)) console.log(number);
//}


//function isPrime(number){
//  for (let factor=2; factor<number; factor++)
//    if(number % factor === 0)
//    return false; //not a prime no.
//  return true;
//}

//showPrimes(11);


//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//Exercise to display properties in an object
const address = {
  street: `45 Modupe St.`,
  city: `Lagos`,
  zipCode: 23401,  
 
}

//const showAddress = address => {
//  for (let key in address)
//    console.log(`${key}: ${address[key]}`);
//}

//showAddress(address);


//Exercise on Initializing Factory and Constructor Functions

//factory
//function showAddress2(street,city,zipCode){
//  return {
//    street,
//    city,
//    zipCode
   
//  }
//}

//const address2 = showAddress2(`45 Modupe St.`,`Lagos`,23401);
//console.log(address2);

//consructor
//function ShowAddress(street,city,zipCode){
//  this.street = street,
//  this.city = city,
//  this.zipCode = zipCode //remember you can't return 'this'
//}

//const address3 = new ShowAddress(`45 Modupe St.`,`Lagos`,23401);
//console.log(address3);


//Exercise to show if 2 objects have the same properties

function ShowAddress(street,city,zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode //remember you can't return 'this'
}

const address3 = new ShowAddress(`45 Modupe St.`,`Lagos`,23401);
const address4 = new ShowAddress(`45 Modupe St.`,`Lagos`,23401);

function isEqual(address3,address4){
  if (address3 == address4){return 'YES'}
  else return 'NO'
}

console.log(isEqual());

function isTheSame(address3,address4){
  if (address3 === address4){return 'YES'}
  else return 'NO'
  
}
console.log(isTheSame());
   // Mosh JS tutorials

   //Ternary Operator
   // let points = 200;
   //  let type = points > 170 ? 'gold' : 'silver';

   // console.log(type); answer will be 'gold'

   //Logical AND (&&) (both operands must be true for value to be true)
   //  let highCreditScore = true;
   //  let highIncome = true;
   //  let eligibleForLoan = highCreditScore && highIncome; 

   //Logical OR (if any operand is true value will be true)
   //  let xhighCreditScore = true;
   //  let xhighIncome = false;
   //  let xeligibleForLoan = xhighCreditScore || xhighIncome;

   //Logical NOT (!) used to negate or make a variable the opposite of its 
   //original value
   //  let applicationRefused = !eligibleForLoan;

   // Non-Boolean example
   //  let userColor = 'red';
   //  let defaultColor = 'green';
   //  let currentColor = userColor || defaultColor; // current color will be 'red'

   //  let xuserColor = undefined; //user didn't choose any color so will the default
   //  let xdefaultColor = 'green';
   //  let xcurrentColor = userColor || defaultColor; // current color will be 'green'

  //BitWise Operator (mostly deal in binaries)
  // 1  === 00000001
  // 2  === 00000010
  // 3 === 00000011

  //BitWise OR (|) any bit with 1 compared to 0 will be 1
  // console.log(1 | 2); result will be 3 

  //BitWise AND (&) any 0 bit compared with 1 will be 0
  // but when 1 is compared with 1 result will be 1 
  // 1  === 00000001
  // 2  === 00000010
  // 0 === 00000000
  //console.log(1 & 2); result will be 0

  //Swaping Variables
  // let a = 'red';
  // let b = 'blue';


 // function sayHi(name){
 //  console.log(`I go by ${name} and I love food`);
 //}
 
 //sayHi('James');
 //sayHi('Anderson');
 //sayHi('Lana');
 //sayHi('Emilio');


 //If..Else conditional statements
 //e.g
 //Hour
 //if hour is between 6AM and 12PM we say Good Morning!
 //if hour is between 12pm and 6pm we say Good Afternoon!
 //Otherwise Good Evening!

 //let hour = 20;

 //if (hour >= 6 && hour < 12) {
    //console.log('Good Morning!');
 //}
 // else if(hour > 12 && hour <= 18){
    //console.log('Good Afternoon!');
 // }
 // else {
    //console.log('Good Evening!');
 // }

  //using Switch-Case conditional statement

  //let role = 'guest';

  //switch(role){ //use only variable instead of
                //expressions in switch-case
  //  case 'guest':
     //console.log('Guest User');
   //  break; //breaks out if condition is met

  //  case 'moderator':
  // console.log('Moderator User');
  // break;

  //  default: //stops process once a condition     
             //isn't met
      //console.log('Unknown User');
    
  //}

  //the switch-case conditinal above is the same as below but using if...else syntax instead
 
 // if(role === 'guest'){
    //console.log('Guest User');
 // } 
 // else if(role === 'moderator'){
    //console.log('Moderator User');
 // } 
 // else {
    //console.log('Unknown User');
 // }


  //LOOPS

  //For loop
 // for(let i = 0; i < 5; i++){
    //console.log('Hello World',i);
  //}

  //say you want odd numbers alone
 // for(let i = 1; i <= 5; i++){
   // if (i % 2 !== 0) {
      //console.log(i);
  //  }
 // }
  
 //and say you want odd numbers in reverse this time
  //for(let i = 5; i >= 1; i--){
   // if (i % 2 !== 0) {
      //console.log(i);
   // }
 // }


  //While loop
  //referencing it with the example on for loop above to show they do the samething.

  //let i = 0; //variable expression is located externally unlike for loops
  //while(i <= 5){
   // if (i % 2 !== 0);
    //console.log(i);
   // i++;
 // }


  //Do...while loop
  //let i = 13;
  //do {
  //  if(i % 2 !== 0){
  //    i++;
  //    console.log(i);
      
  // } 
  //} while(i <= 5)
       

  //For...in loop
  //const person = {
  //  name: 'Gotti',
 //   age: 2
  //};

 // for(let key in person) //result for key/properties
 // console.log(key);

 // for(let key in person) //result for key & its values
  //console.log(key,person[key]);


  //for...of loop
  //const colors = ['red', 'green', 'blue'];
  
  //for (let color of colors)
  //  console.log(color);

  //Break & Continue
  //let i = 1
  //while( i <= 10)
  //{
  // if(i === 4) break;
  //  console.log(i);
  //  i++;
  //}
  

 // while(i <= 10)
 // {
 //  if(i % 2 === 0) break;
 //  i++;
 // }


   //Key-Value pairs in Objects(OOP)
   //using the circle as an object 

   //const circle = {
   //   radius: 1,
   //   location: {
   //      x:1,
   //      y:1
   //   },
   //   isVisible: true,
   //   draw: function (){ //Method = fn in an object
   //      console.log(`Draw a circle`);
   //   }
   //};

   //circle.draw();


   //FACTORY FUNCTION

   //function createCircle(radius){
   //   return {
   //     radius, //only use key once it has a parameter
   //     draw(){ //no need to prefix with function in FF
   //         console.log(`Draw a cirle`);
   //      }
   //  }
   //};


   //const circle1 = createCircle(48);
   // console.log(circle1);

   // const circle2 = createCircle(9);
   // console.log(circle2);


   //CONSTRUCTOR FUNCTION
   //makes use of the 'this' keyword as reference

   //function Circle(radius){
   //   this.radius= radius,
   //   this.draw = function (){ //must add keyword function
   //      console.log('a circle');
   //   }

   //}

   //const circle3 = new Circle(6);
   //console.log(circle3);


   //DYNAMIC NATURE OF AN OBJECT

   //const circle = {
   //   radius: 1,
   //}
   //using dot notation to add property and method to an object
   //circle.color = 'blue';
   //circle.draw = function(){console.log('a circle')};

   //deleting properties or methods(using 'delete keyword)

   //delete circle.color;
   //console.log(circle);


   //FUNCTIONS ARE OBJECTS
   //functions can be accessed using the dot notation which could a property or method
    
   //circle.name //shows name of the object
   //circle.length //shows length of the object
   //circle.call //calls a new obj with arguements, if there isn't a new object then it will refer to the global object by default

   //both expressions below are the same
  // function Circle(radius){
  //    this.radius = radius;
  //    this.draw = function(){console.log('draw');}
  // }
  // const circle = new Function('radius',`
  //    this.radius = radius;
  //    this.draw = function(){console.log('draw')}`)


  //VALUE TYPES vs REFERENCE TYPES
  //let x = 10;
  //let y = x;
  //x = 20; //y will still be 10 cause primitive values are copied independently in variables

  //let x = {value: 10};
  //let y = x;
  // x = {value: 20};// this time y will also be equal to {value: 20} cause object values are copied directly to an address in memory and its the memory address that's copied to the variable instead. Hence changes in one will effect the other.
  //N.B Primitives are copied by their values while Objects are copied by their references.
   
  //another example below
  //let number = 10;
  //function increase(number){
  // number++;
   
  //}
  //increase(number);
  //console.log(number);//the number value will still be 10 regardless of the increment because the variable-number is independent of the variable-number in the function scope cause its value is primitive.
  
  //let obj = {value: 10}; 
  //function increase(obj){
  // obj.value++;
   
  //}
  //increase(obj);
  //console.log(obj);//the value this time will change to 11 cause obj when invoked in the function or local scope  is parsed through as a refrence type since its an object and will affect the obj in the global scope


  
   //ENUMERATING PROPERTIES OF AN OBJECT

   //const circle = {
   //   radius: 1,
   //   draw(){
   //      console.log('draw');
   //   }
   //}

   //for (let key in circle){
   //   console.log(key, circle[key]);
   //}

   //for (let key of Object.keys(circle)){ //Objects are not iterable hence you need to use the built object method 'Object.keys()' in other to manipulate the object as an array.
   //   console.log(key);
   //}

   //for (let entry of Object.entries(circle)){ // the object method Object.entries() here returns the properties and methods of an object as key-value pairs in an array.
   //   console.log(entry);
   //}

   //we can also check to see if a particular property or method is present in an object.
   //if ('radius' in circle) console.log('YES')


   //CLONING AN OBJECT
   //you can copy or clone properties & methods from another object to an empty or partially filled object 

   //const circle = {
   //   radius: 1,
   //   draw(){console.log('draw');}
   //}

   //const another = {};
   //for (let key in circle) //legacy method for cloning
   //   another[key] = circle[key]
   //   console.log(another)

   //using the Object.assign() is a proper method of cloning and it can clone properties & methods from multiple source objects to an empty or a pre-built object.
   //const another = Object.assign({}, circle)
   //console.log(another);

   //another method for object cloning is using the SPREAD OPERATOR which is the simplest form
   //const another = {... circle};
   //console.log(another);

   //STUDY THE MATH AND STRING FUNCTIONS ON MDN WEBSITE
   //MAKE USE OF TEMPLATE LITERALS FOR CLEANER CODE

   //DATE

   const date1 = new Date()

   
   


   

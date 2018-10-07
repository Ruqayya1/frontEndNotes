// DATA TYPES IN JAVASCRIPT

// primitive types vs Reference Types

/* primitive types - data is stored in the location the variable accesses
 when we access that data , we access it by its actual value

 reference types: accessed by references, not by actual values
  -objects are stored on the heap, not in the variables
-  a pointer to a location in a memory

// primitive types 
// strings- text (sequence of characters)
// -numbers -integers , decimals , floats
// -booleans -true/false
// null- intentional empty value
// undefined -variale that hasnt been assigned a value yet . all variables are undefined by default 
// symbols 

//REference Types
// Arrays
// Object Literals
// Functions
//Dates
//Anything  els of value that we can store
*/


//Java Script is dynamically typed language
// types are associated with actual values, not variables
//  same varibale can hold multiple types
//  we do not need to specify types


// Primitive types
const name='ruqayya';
console.log(typeof name);
const age= 24;
console.log(typeof age);
const hasKids =true;
console.log(typeof hasKids);


const car=null;
console.log(typeof car);

let gotNothingToSay;
console.log(typeof gotNothingToSay);

// const sym =symbol();
// console.log(typeof sym);


// Reference Types/objects
// array
const hobbies =['cooking', 'reding', 'sports'];
console.log(typeof hobbies);

// object literals
const address ={
    street:"1697 here",
    city: 'Chicago',
    state:'IL',

}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);

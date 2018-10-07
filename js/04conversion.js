// type conversion -taking a variable and changing the data type

let val;

val =555;
//convert to string
val=String(555);
val= String(4+4);

// here first add the numbers and convert to string

val= String(true);

// date to string 
val = String(new Date());

//array to string

val =String([1,2,3,4,5]);

// to string method

val = (5).toString();

//string to number
val=Number('5');
val=Number(true);
val=Number(false);
// null to number

val=Number(null);
//  if we try to parse null as a number, the value will always be retuned zero

val=Number("hello");
val=Number([1,2,3,4,5]);

//parse methods
val=parseInt('100.30');
val=parseFloat('100.30');

//output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); - for strings

// console.log(val.toFixed(2)); - it rounds to 2 numbers after the point


// type coersion- we take one type of data and change to another

const val1= String(5);

const val2=6;
const sum =Number( val1+val2);
console.log(sum);
console.log(typeof sum);


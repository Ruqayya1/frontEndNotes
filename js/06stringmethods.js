const firstName ="William";
const lastName="Johnson";
const age= 48;

const str ="Hello there Im a dev";
const tags="web-design, development,programing,sports ";

let val;

val=firstName+lastName;
val=firstName+ ' '+lastName; //create the space between
val='Hello, my name is '+firstName +'. And Im '+age+' years old.'

//append - adding on to variable with out completely replacing it

val ="Ruqayya";
val+=" Jabeen";

//escaping 
val='that\'s awesome, I can\'t wait';

//length property
val= firstName.length;

//concat( ) method
val = firstName.concat(' ', lastName);

// change cases
val = firstName .toUpperCase();
val=firstName.toLowerCase();

//treating  strings like read-only arrays
// finding specific characters/values using the index

val= firstName[5];

//index of method - to find the index of value 

val= firstName.indexOf('l');
val =firstName.lastIndexOf('l');

//charAt() - the opposite of index

val= firstName.charAt('2');
val=firstName.charAt(firstName.length-1);

//substring() -pulling a substring from a string
val=firstName.substring(0,4);

//slice() - mostly used with arrays to pull things out of them, but we can also use with the strings

val = firstName.slice(0,4);
val=firstName.slice(-3);

//split() - splits a string in to an array based on a seperator

val = str.split(' ');
val = tags.split(',');

//replace()-  
val = str.replace('dev', 'developer');
// includes()- gives a true or false values based on if something's in the string

val = str.includes('Hello');
val = str.includes('foo');
//output

console.log(val);
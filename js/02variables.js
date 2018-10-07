/*
var- been around since the beginning of javascript    (JS)
let- same as var and now we are using it to manipulate it later
cont- keeping variables contant and if you change it will show error
*/
// declaring the variable
var name = "sam";
console.log(name);

name="jonny";
console.log(name);
//  initializing the variable

var greeting;
console.log(greeting);

greeting="hello everybody"
console.log("greeting");

// Rules and conventions of Javascript

/* variables can include letters, numbers, underscore and $
 variables cannot start with number

 multiword conventions
 -Camelcasing
 -pascalcasing
 -underscore_casing
 */

 let firstName ="Ruqayya";
 console.log(firstName);
 firstName= "jabeen";
 console.log(firstName);

//  const- stands for constant and it cant be changed or reassigned
//  - we need to declare and cannot be initialize
const nickName ="bushra";
console.log(nickName);


//  quirk - working with objects
const person ={
    name :"rodney sam",
    age: 32,
    height:"5'4"
}
console.log(person);
person.name ="sarah";
person.age=16;
console.log(person);

// working with arrays

const array =["bob","rob","sam",'john','tom','tim','fin','jon','ted','laquisha'];
console.log(array);
console.log(array[6]);


array.push('Michael Jordon');
console.log(array);



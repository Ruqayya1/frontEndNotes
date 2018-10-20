const person = {
    firstName: 'Ruqayya',
    lastName: 'Jabeen',
    age: 23,
    email:'ruqayya@gmail.com',
    hobbies:['coding','family time', 'eating','sleeping'],
    address: {
        city: 'chicago',
        state: 'il',

    },
    // birthYear:function(){
    //     return 1987;
    // }
    birthYear:()=>{
        return 1994;
    }
}
// curly braces define this variable as an object literal 
// inside the curly braces we put key value pairs that are seperated by comas ,
// functions stored inside the objects are called methods

let val;

val =person;

// get specific value 
val = person.firstName;
// another way of doing the same thing, but not recommened
val=person['lastName'];
val=person.hobbies;
val=person.hobbies[2];
val=person.address;
val=person.address.state;

// another way of doing this, but  not recommended
val=person.address['city'];
val= person.birthYear();

// in object literals, we can access other properties
// THIS keyword
const person2 ={
    age:24,
    getbirthYear:function(){
        return 2018- this.age;
    }
}
val= person2.getbirthYear();

// Arrays amde of objects
const people =[
    {name: 'bob', age: 34},
    {name: 'tim', age: 32},
    {name: 'wes', age: 26},
    {name: 'ray', age: 23},
    {name: 'jim', age: 67},
    {name: 'messi', age: 56}
]
for(let i=0; i<people.length;i++){
    console.log(people[i].name);
}


// output
console.log(val);
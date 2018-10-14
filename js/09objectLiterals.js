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



// output
console.log(val);
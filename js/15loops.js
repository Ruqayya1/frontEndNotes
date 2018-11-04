/* General loops and iteration 

LOOPS : instruction that repeats unless the specific instruction is reached or not 
- used to run the same block of code using d
different values each time 
the most popular ones are
1: for loops
- takes in 3 parameters and are all seperated by semicolons
   - first parameter is declaration of variable
   - second paramenter is condition
   -third parameter is increment(i++)

2: while loops
   - set the variables outside the loop
   - while(condition){

   }
   * doesnt know how many iterations we have 

3: do while loops
   - its always going to run atleat once
   
   -looping through arrays

-forEach() takes in a callbacl function(anaonymous), it can accept up to three parameters
  1: iterator - naming convention is similar to the syntax of the array
  2:

  -map()
  - used to reeturn something different 

  

*/

// For LOOPS
for(let i =0; i<10; i++){
    console.log(i);
}

// Other things we can do with for loops
//concat
for(let i =0; i<10; i++){
    console.log( 'Number '+i);
}
// skip an iteration/break out of loop
for(let i =0; i<10; i++){
    if(i===5){
        console.log(`${i} is my fav `);
        continue;
    }
    if(i===8){
        console.log('break out of loop');
        break;
    }
    console.log( 'number ' +i);
}

//  WHILE loops
let i= 0;
while(i<10){
    console.log('while loop' +i);
    i++;
}

 //Do-while loops


 let e =0;
 do{
     console.log('do while loop ' +e);
     e++;
 }
 while(e<10);

//  example
let f = 100;
do{
    console.log('do while example2 ' +f)
    f++
}
while(f<10);

// Iteration and looping theough array

const cars =['ford','nissan','honda','toyota'];
for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}
// forEach() method
cars.forEach(function(car,index,theEntireArray){
    console.log('forEach '+car);
    console.log(`with index ${index}:${car}`);
    
})

// map() method


const users =[{id:1,name:'rik'},
{id:2,name:'rik'},
{id:3,name:'tik'},
{id:4,name:'bik'},
{id:5,name:'mik'}

]
// create another id and take the users array and create an array of id's for the users
const ids = users.map(function(user){
    return user.id;

})
console.log(ids);

// iterating through objects using 'for in loop'

// used to loop through objects so that we can get key value pairs

const user ={
    firstname:'champa',
    lastname: 'chameli',
    age:89,
    decentHumanBeing: false
}
for(let x in user){
    // console.log(x);
    // console.log(user[x]);
    console.log(`${x}: ${user[x]}`);
}
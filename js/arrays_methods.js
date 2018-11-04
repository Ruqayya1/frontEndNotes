const numbers = [43, 56,  33, 23, 44, 36, 5];
// conventional method

const age =[23,45,67,5,45,25,38, 48]

const numbers2= new Array (22, 45, 67, 78, 34);
// this is using array constructor / array-object => new array

const fruits =['apple', 'banana', 'orange', 'kiwi'];

const mixedArray =[ 22, 'apple', true, undefined, null, {a:1,b:'two'},new Date()];
// console.log(numbers);
// console.log(numbers2);
// console.log(fruits);
// console.log(mixedArray);

let val;
// get array length
val = numbers.length;

// check if something is actually a array
val = Array.isArray(numbers);
val =Array.isArray('hello'); 
// this shows false


// get single value
val =numbers[3];

//insert in to array

numbers[2]=100;

// find index of certain value
val = numbers.indexOf(36);

//mutating the arrays

//  add on to the front of an array
numbers.unshift(120);

//take of from the front
numbers.shift();

// add on to the end

numbers.push(250);
//take off from the end
numbers.pop();

// splice values
numbers.splice(1, 3);
// it can take negative values to remove the specified number




// reverse an array
numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// sorting arrays
// val = fruits.sort();
val= numbers.sort(); 
// it sorts the numbers based on the value of the first digit (small to big)

// use the compare function to display ascending and decending 
val = age.sort((x,y)=>
{
    return y-x;
})
//  return x-y for ascending order


// find method (takes in a testing function)
//  to use the find method, we must first create a testing function

var under50=(num) =>{
    return num <50;
}
val = age.every(under50);



// output
console.log(val);
console.log(numbers);
// console.log(age);
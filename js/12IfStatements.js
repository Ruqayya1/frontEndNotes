/*
If Statements - used to evaluate some kind of condition and perform action based on that condition or perform another action if that condition is not met

syntax:
if (given condition){
    doSomething 
}
else{
    do something else
}


if (given condition){
    doSomething 
}
elseif{
    do something else
}
else{
    do some thing else
}
*/

const id = 100;

 if (id ==100){
     console.log('correct');
 }
 else{
     console.log('incorrect');
 }
 if (id != 100){
     console.log('correct')
 }

 if (id ==='100')
 {
     console.log('correct');
 }
 else{
     console.log('incorrect');
 }

//  ELSE IF STATEMENTS

if( id >150){
    console.log('your id is greater than 150')
}
else if (id <100)
    {
        console.log('id is less than 100');
    }
    else{
        console.log(`your id is ${id}`);
    }
const color ='red';
if(color=='red'){
    console.log('color is red');

}
else if(color=='blue'){
    console.log('color is blue');
}
else{
    console.log('color is not red and blue');
}

const name ='steve';
const age = 70;

if( (age>0) && (age <12))
{
    console.log(`${name} is a child`);
}
else if((age>=13) &&(age<=19))
{
    console.log(`${name} is a teenager`);
}
else{
    console.log(`${name} is a adult`);
}

// under 16 or over 65 cant participate in race
if (age<16 || age>65)
{
    console.log(`${name} cannot participate in 200k triathalon`);
}
else{
    console.log(`${name} is not registered`);
}

// TERNARY OPERATOR - short way of doing conditionals
console.log(id===100 ? "correct":"incorrect")

// without braces -

if ( id === 100)
console.log('correct with out braces')
else
console.log('incorrect without braces');
// GLOBAL SCOPE
var a = 1;
let b =2;
const c =3;

// Function Scope
function test(){
    var a =4;
    let b = 5;
    const c =6;
    console.log('Function Scope ' , a, b, c);
}
test();
// Block level Scope
//   - for if staments , loops and anything wrapped inside curly braces
//  If -statement
if(true){
    var a =7;
    let b = 8;
    const c =9;
    console.log('block level scope:' , a, b, c)
}

// For Loop
for(let a = 0; a<10; a++){
    console.log(`Block level scope ${a}`);
}

//  Global Scope output
console.log('Global Scope ', a, b, c);


// var dcelared inside the block-level scope alters var in the global scope
// let and const has block-level scope and var has function scope
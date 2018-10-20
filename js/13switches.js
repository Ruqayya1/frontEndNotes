/* switches- another way to validate conditions , works same way as an if statement

- use case for switches- in order to avoid repeating else if oevr and oevr again, when they are multiple cases
*/
const color ='red';
switch (color){

    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
    console.log('color is not red or blue');

}

let today = new Date();
day = today.getDay();
switch(day){
    case 0:
    console.log('Today is sunday')
    break;

    case 1 :
    console.log('Today is monday')
    break;
    case 2 :
    console.log('today is wednesday')
    break;
    case 3:
    console.log("Today is thursday")
    break;
    case 4:
    console.log('Today is friday')
    break;
    case 5:
    console.log('today is saturday')
    break;
}


// // new method
// let day;
// switch(new Date().getDay())
// {
//     case 0:
//     day = 'sunday';
//     break;
// }

// console.log(`today is ${day}`);



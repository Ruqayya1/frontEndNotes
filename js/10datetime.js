let val;
const today = new Date();
 val = today;

//  val = today.toString();
//  we can manually change date and time  ourselves
let birthday =new Date('01-28-1994 11:25:00');
birthday = new Date('january 28 1994');

val =birthday;

//  to get the month
val = today.getMonth();
// index-based , jan starts at zero
val =today.getDate();
val=today.getDay();
// this is index based and zero starts at sunday
val= today.getFullYear();
val= today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

val = birthday;
birthday.setMonth(2);
birthday.setDate(12);


// output
console.log(val);
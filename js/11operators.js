const x= 5;
const y= 9;
let val;
/*
comparison operators
operator        name
>               greater than
>=              greater than or equal to
<               less than
<=              less than or equal to
==              equal to
!=              not equal to
===             equal to in value AND type
!==           not equal to in value AND type
*/
val = x>5;

val =x>=5;
val = x<-50;
val = x<=50;
x ==5;
// IF ITS STRING THEN ALSO IT IS TRUE BCZ ITS OF SAME VALUE
 val = x=='5';
 val = x ==='5';

/* Logical Operators
opertor                  name
&&                       AND
||                       OR
!                        NOT
*/

val = (x<10) &&(x!== 5);
val = (y<9) || (x===5);


console.log(val);
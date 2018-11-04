/* removing and replacing items - classes and attributes
*/
//replace items
// create an elemet

const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('New Heading'));

// grab old heading that you want to replace

const oldHeading = document.querySelector('#task-title');

// get parent and store it in a variable
const cardAction =document.querySelector('.card-action');

// replace 
cardAction.replaceChild(newHeading,oldHeading);
console.log(newHeading);

// removing elements


// create variables for list items
const lis = document.querySelectorAll('li');
// create variable for ul
const list = document.querySelector('ul');

// remove using the remove() method
lis[0].remove();

// remove child element

list.removeChild(lis[3]);

// classes and Attributes
const firstLi =document.querySelector('li:first-child');
console.log(firstLi);

// it selects the first item inside li item
console.log(firstLi.children[0]);
const link = firstLi.children[0];
let val;

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
val = link;
val =link.classList.remove('test');

val = link;


// attributes
val = link.getAttribute('href');
val = link.setAttribute('href','www.yahoo.com');
val = link.hasAttribute('href');

val = link.setAttribute('title','Google')
// val = link;

val = link.hasAttribute('title');

// output
console.log(val);
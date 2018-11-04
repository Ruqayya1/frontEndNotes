// // document.getElementByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0] .style.color ='red';
// items[3].textContent ='Hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// //  document.getElementByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[0].style.color='blue';

// lis =Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//     console.log(li.className);
// })

// // we can change the text content of the lis
// lis.forEach(function(li){
//     li.textContent='hello';
// })
// //Pass an index and set it to a template string
// lis.forEach(function(li,index){
// li.textContent =`${index}:Hello`;
// })

// console.log(lis);

//document.querySelectorAll
//it returns a node-list, and there's a difference
//a node-list, not only counts the elements, but also things like text-nodes
// also allows for array methods without having to convert them

const items = document.querySelectorAll('ul.collection li.collection-item')
console.log(items);

items.forEach(function(item, index){
    item.textContent=`${index}:Hi there!`
})


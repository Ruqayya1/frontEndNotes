/*
Event buubling
  - bubbling up of the events through the dom


*/

// event bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card-title');
// })

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card-content');
// })
// document.querySelector('#main').addEventListener('click',function(){
//     console.log('main');
// })


// event delegation is the opposite of event bubbling
// is the opposite of event bubbling
// its where we put a listener  on a parent element, and then use logic inside the event-handler to target the element we actually want the event for
// it can be any parent


// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click',deleteItem);
// function deleteItem(){
//     console.log('delete-item');
// }

document.body.addEventListener('click',deleteItem);
// function deleteItem(e){
//     if(e.target.className ==='fa fa-remove'){
//     console.log('delete-item');
//     }
  
// }

// function deleteItem(e){
//     if(e.target.parentElement.className==='delete-item secondary-content'){
//         console.log('delete item');
//     }
// }


// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//     }
// }

function deleteItem(e){
    if(e.target.parentElement.className==='delete-item secondary-content'){
        e.target.parentElement.parentElement.remove();
    }
}
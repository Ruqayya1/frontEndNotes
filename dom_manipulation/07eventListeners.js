/* Event Listeners

how to add an event listner to the clear-task button

*/
 document.querySelector('.clear-tasks').addEventListener('click',function(e){
console.log('Hello world')
e.preventDefault();
})

// in addition to putting anonymous function we can use second parameter, we can use named function
document.querySelector('.clear-tasks').addEventListener('click',onClick);
function onClick(e){
    // console.log('clicked');
    let val;
    val =e;
    // event target element
    val = e.target
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerHTML ='hello';

    // event type
    val = e.type;
    // time stamp
    val = e.timeStamp;

    // coordinate events relative to the window

    val = e.clientY;
    val= e.clientX;

    // coordinate events relative to the element
    val = e.offsetY;
    val =e.offsetX;

    console.log(val);
    e.preventDefault();
}
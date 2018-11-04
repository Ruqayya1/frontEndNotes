const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

form.addEventListener('submit', runEvent);

// clear input

taskInput.value='';

// keyboard events
// keydown
// taskInput.addEventListener('keydown',runEvent);

// // keyup
// taskInput.addEventListener('keyup',runEvent);

//focus
taskInput.addEventListener('focus', runEvent);

// blur
taskInput.addEventListener('blur',runEvent);

// cut
taskInput.addEventListener('cut',runEvent);

// paste
taskInput.addEventListener('paste',runEvent);

// input
taskInput.addEventListener('input',runEvent);


// event handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    // console.log(taskInput.value);
    heading.innerText=e.target.value;
    e.preventDefault();


}
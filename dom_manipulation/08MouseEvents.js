// Mouse events - 
 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// mouse events

// click

// clearBtn.addEventListener('click', runEvent);
// double click

// clearBtn.addEventListener('dbclick',runEvent);

// mouse down
// clearBtn.addEventListener('mousedown', runEvent);
//mouse enter
// card.addEventListener('mouseenter', runEvent);

// // mouse leave
// card.addEventListener('mouseleave', runEvent);

// mouseover
// card.addEventListener('mouseover', runEvent);
// mouse out
// card.addEventListener('mouseout', runEvent);


// mouse move

card.addEventListener('mousemove', runEvent);




// event handler

function runEvent(e){
    // erercise 1- heading to display mouse coordinates
    heading.textContent = `MouseX:${e.offsetX} MouseY:${e.offsetY}`
    console.log(`EVENT TYPE: ${e.type}`);
    e.preventDefault();

    // erercise 2- display background rgb color using offset properities from our event object as parameters
     document.body.style.background = `rgb(${e.offsetX},${e.offsetY},100)`;  
}
/* Dom Selectors

-Dom methoda allow us to pull from the DOM and perform various actions with the elements or nodes

 - single Element Selectors
    - will allow you to grab "one" element by its class, id or tag name
    - By default it will grab the first one, if multiple classes or tags are present
    -querySelector()- newer and much more powerful
     - we can use class, id or tag names

-Multiple Element selectors

/************************************************ */

//document.getElementById()
console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Changing Styles
// document.getElementById('task-title').style.background='yellow';
// document.getElementById('task-title').style.color='purple';

//DRY- dont repeat yourself

const taskTitle = document.getElementById('task-title');

// changing style
taskTitle.style.background ='yellow';


// changing content
taskTitle.textContent ='Task Lists';
taskTitle.innerText ="My Tasks";
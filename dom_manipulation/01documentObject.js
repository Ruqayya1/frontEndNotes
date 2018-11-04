let val;
val =document;

val = document.all;
val = document.all[0];
val= document.head;

val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
//Selecting stuff in our DOM without slectors

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val=document.links[0];
val= document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList;
val = document.links[0].classList[0];

val= document.images;
val = document.scripts;

val = document.scripts[2].getAttribute('scr');

let scripts = document.scripts;
// scripts.forEach(function (script)
// {
// console.log(script);
// })
//error because forEach is an array method 


let scriptArray = Array.from(scripts);
scriptArray.forEach(function (script)
{
    console.log(script);
    console.log(script.getAttribute('src'));
})


//output
console.log(val);
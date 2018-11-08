
// document.querySelector('.btn').addEventListener('click', onclick);
//  function onclick(){
//    var li = document.createElement("li");
//    var input = document.getElementById("task");
//    li.innerHTML =input.value;
//    li.className='delete-item secondary-content';
//    const link = document.createElement('a');
//    link.className ='delete-item secondary-content';
//    li.setAttribute('href','#');
//    link.innerHTML='<i class = "fa fa-remove"></i>'
//    li.appendChild(link);
//    document.querySelector('ul.collection').appendChild(li);
   

// }


// document.body.addEventListener('click',strikes)
// function strikes(e){
//     if(e.target.parentElement.className==="delete-item secondary-content"){
//         let val = document.getElementsByClassName("collection-item").value
//         val.style.background ="red";
//     }
// }

// >>>>>>>>>>>>>>New way>>>>>>>>>///

const val= document.querySelector(".btn")
val.addEventListener('click', event);
function event(){
    var txtval = document.getElementById('task').Value;
    var listNode = document.getElementsByClassName('collection');
    var liNode =document.createElement("li");
    var txtNode =document.createTextNode(txtval);
    liNode.className = 'collection-item';
    const link = document.createElement('a');
  link.className ='delete-item secondary-content';
   liNode.setAttribute('href','#');
       link.innerHTML='<i class = "fa fa-remove"></i>'
   
    liNode.appendChild(txtNode);
    liNode.appendChild(link);
         listNode.appendChild(liNode);
         preventDefault();
}
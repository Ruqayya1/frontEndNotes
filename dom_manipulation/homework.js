

// adding lists to the item

//  const val =document.getElementById("task").value;
//  val.className='collection-item';
//  document.querySelector('ul.collectiion').appendChild(val);
//  const link = document.createElement('a');
//  link.classNmae ='delete-item secondary-content';
//  link.setAttribute('href','#');
//  link.innerHTML='<i class = "fa fa-remove"></i>'
//  val.appendChild(link);
   
// const taskinput = document.getElementById('task');
// taskinput.value=" ";
document.querySelector('.btn').addEventListener('click', onclick);
 function onclick(){
   var li = document.createElement("li");
   var input = document.getElementById("task");
   li.innerHTML =input.value;
   li.className='delete-item secondary-content';
   const link = document.createElement('a');
   link.className ='delete-item secondary-content';
   li.setAttribute('href','#');
   link.innerHTML='<i class = "fa fa-remove"></i>'
   li.appendChild(link);
   document.querySelector('ul.collection').appendChild(li);
   

}

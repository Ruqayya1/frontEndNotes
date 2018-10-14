// template literals - including html inside our JS

const name ="john";
const age =25;
const city ="chicago";
const job ="developer";
html='<ul><li> Name: ' +name+'</li></ul>';
html = ' <ul>' +    
        '<li> Age : '+age+'</li>'+
        '<li> Job:   '+job+'</li>'+
        '<li> city:  '+city+'</li>'+
        '</ul>' ;
         
        function hello(){
            return 'hello';
        }



        // with template string using backticks and $
        html =`
        <ul>
        <li> Name:${name}</li>
        <li> Age:${age}</li>
        <li> city:${city}</li>
        <li> Job:${job}</li>
        <li> ${4+4}</li>
        <li> ${hello()}</li>
        <li> ${age>30? "over 30" :"under 30"} </li>
        </ul>
        `




//  output in html

document.body.innerHTML= html;
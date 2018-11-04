/* functions: - control structure
             - blocks of code that can be defined and called at the same time 
             - functions can take parameters, ehich can later be paased as argumenrts when the function is called

             */
            //  function declaration

            function greet1(){
                console.log('Hello');
            }
            greet1();


            // RETURN KEYWORD
            function greet2(){
                return 'Hello return keyword';
            }
           console.log(greet2());

           
           //PARAMETERS AND ARGUMENTS
        //    - parameter simply put is a variaable or looks like a variable 
        // arguments is the data you paased in to the methods parameters


        function greet3( firstname, lastname){
            return 'hello' +' '+firstname+ ' '+lastname;
        }

        console.log(greet3());
        console.log( greet3('Ruqayya', 'Jabeen'));

        // default values -pre ES6
        function greet4(firstname, lastname){
            if(typeof firstname==='undefined'){
                firstname='John';
            }

            if(typeof lastname==='undefined'){
                lastname='smith';
            }

            return 'Hello'+'  '+ firstname +' '+ lastname;
        }
        console.log(greet4());
        console.log(greet4('Ruqayya', 'Jabeen'))


        //DEFAULT VALUES -ES6

        function greet5(firstname ='John' , lastname='smith'){
            return 'hello' + ' '+firstname+' '+lastname
        }
        console.log(greet5());
        console.log(greet5('pin', 'down'));


        //  Function expression 
        // Its putting a function in a variable
        // it can be named or anonymous
        const square = function(x){
            return x*x;
        }
        console.log(square(8));


        //  IIFE (Immediately invokable function expression)


        (function(){
            console.log('IIFE RAN...')
        }) ();

        (function(name){
            console.log('hello '+ name);
        
        }) ('Smith');

        //Property methods
        // functions inside objects

        const todo = {
            add: function(){
                console.log('add todo')
            },
            edit: function(id ='default id'){
                console.log(`Edit to do ${id}`);
            }
        }
        todo.add();
        todo.edit(22);
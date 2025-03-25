// define a function
function example(){
    console.log("hello function");
    
}
//calling a function
example();

function example1(a)
{
console.log(a);

}

example1(10);

//Function expression
//const func=function example1(a)
const func=function(a)
{
console.log(a);

}

func(10);

//Immediate Invoke Function expression
(function(a){
    console.log(a);
    
})
(4);

// Arrow FUnction
const hello=(a)=>{console.log(a);
}
hello(3);
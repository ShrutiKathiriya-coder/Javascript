// function as a varible

//defination 
//Storing a function in a variable and calling it

// syantax
var add=function(x,y){
    console.log(x*y);
    
}
add(10,10)

//arrow function  (anonymous function)

//method 1

const product = (p,q) =>{
    console.log("add ",p+q);
    console.log("sub ",p-q);
    console.log("mul ",p*q);
    console.log("div ",p/q);
}
product(10,20)

//method 2 (single line )

const pro = () => "hello javascript";

console.log(pro());


//IIFE  (immedelitly invoking function expression)

(function (){
    console.log("iife function");
    
})();

//example

(function(a,b){
    console.log("addition ",a+b);
    
})(10,10)

//closer function

function outerfun(){
    function innerfun(){
        return "inner function....";
    }
    console.log("outer function called");
    return innerfun;
    
}
console.log(outerfun()());

//or

// let a=outerfun()
// console.log(a());

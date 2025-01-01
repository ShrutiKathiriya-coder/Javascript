//oops  (oobject oriented programming language)

// class => logical entity of the object 
      // -> object in commen property collection

// how to class declare in js(properties & methods)

// class test{
//     sayhello(){
//         console.log("hello 2025, happy new year..!");
//     }
//     addition(x,y){
//         console.log("addition",x+y);
        
//     }
// }
// var obj= new test();
// obj.sayhello();
// obj.addition(10,10);


// constrctor and typeof constuctor

// what is constrctor => special method of value class(automatically call when object is creating).it's call construction.

class test{
    constructor(){
        console.log("defualt constuctor called..!!");
    }
    //create variable
    shruti(name,age,add){
        this.name=name;
        this.age=age;
        console.log("perameter of construction:=",this.name,this.age);
    }
};
var obj=new test();
var obj=new test();

obj.shruti("shruti",20)
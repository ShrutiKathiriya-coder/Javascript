//object :

const { name } = require("ejs")

// collection of multiple datatype or (physical entity)

// syntax  
let a ={
    // key : value(Number,String,Boolean,function)  //always pair
}

// let person ={}; //emptyb object
// console.log(person);

// let person :newobject()
// console.log(person);

let person={
    name : "shruti",
    age:20,
    email:"kathiriyashruti@gmail.com",
    sayhello:function(){
        return ("hallo guten tag");
        
    }
    
}
console.log(person);

//1) dot oprator

console.log(person.name);

console.log(person.age);

//2) [](sqare opator)
//syntax ['key'] => string formate

console.log(person['email']);
console.log(person['name']);
console.log(person['age']);
console.log(person['sayhello']());

// add keys

console.log(person);
person.gender ="female"
console.log(person);


//delete keys

delete person.age;
console.log(person);


//methods

//1 hasownproprety

console.log(person.hasOwnProperty("name")); //true
console.log(person.hasOwnProperty("age")); //false

//2 keys  key convert to array
console.log(Object.keys(person));
//output [ 'name', 'email', 'sayhello', 'gender' ]

//3 values
console.log(Object.values(person));

//output [
//   'shruti',
//   'kathiriyashruti@gmail.com',
//   [Function: sayhello],
//   'female'
// ]

//4 assign

var b={name:"shruti"};
var c={age:20,city:"surat"}

Object.assign(b,c);
console.log(b);

//output { name: 'shruti', age: 20, city: 'surat' }


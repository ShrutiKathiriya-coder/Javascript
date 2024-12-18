
// answer 1
let mycolor=["red","green","white","black"];
console.log(mycolor);

//output  [ 'red', 'green', 'white', 'black' ]

let mycolor2=["red","green","white","black"];
mycolor2.pop()
console.log(mycolor2);

//output [ 'red', 'green', 'white' ]

let mycolor3=["red","green","white","black"];
mycolor3.splice(1)
console.log(mycolor3);

//outout [ 'red' ]

let mycolor4=["red","green","white","black"];
mycolor4.splice(3,2)
console.log(mycolor4);


//output [ 'green', 'white' ]

let mycolor5=["red","green","white","black"];
mycolor5.push("orange");
console.log(mycolor5);

//output [ 'red', 'green', 'white', 'orange' ]

//answer2 

// let numbers = [1, 2, 3, 4, 5];

// let loop = 0;

// for (let i = 0; i < numbers.length; i++) {
//     loop += numbers[i];
// }

// console.log(loop);

//foreach
let numbers = [1, 2, 3, 4, 5];


let ForEach = 0;

numbers.forEach(function(num) {
    ForEach += num;
});

console.log(ForEach);



//answer5

var arr=[-23,-20,-17,-12,-5,0,1,5,12,19,20]
console.log("before num ",arr);

//output before num  [
//   -23, -20, -17, -12, -5,
//   0,   1,   5,  12, 19,
//  20
// ]

let arr1=arr.filter((ele,index)=>{
    return ele>0;
})
console.log("after num",arr1);

//output after num [ 1, 5, 12, 19, 20 ]


//answer 6

let arr3=[2,5,6,3,8,9]
let ans=arr3.map((ele,index)=>{
    return ele * 2;
})
console.log(ans);
//output  [ 4, 10, 12, 6, 16, 18 ]

//answer 7

let num=[23,20,17,12,5,0,1,5,12,19,20]
console.log(num);

let ans9=num.sort((a,b)=>{
    return a-b;
})
console.log(ans9);
//output [
//    0,  1,  5,  5, 12,
//    12, 17, 19, 20, 20,
//    23
//  ]

//answer 8

let words=['python','javascript','go','java','php','ruby']
let anss=words.filter((ele,index)=>{
    return ele.length >8
})
console.log(anss);
//output [ 'javascript' ]

// answer 9

let x=["a","i","r","p","l","a","n","e"]
let ans1=x.find((ele,index)=>{
    return ele==="r";
})
console.log(ans1);

//output r

let y="a new java book"
let ans2=y.toUpperCase()
console.log(ans2);

//output A NEW JAVA BOOK

let z="a new java book";
let ans3=z.toLowerCase()
console.log(ans3);

//output a new java book


//answer 10

let array=[1,2,3,4,5]
array.reverse()
console.log(array);

//output [ 5, 4, 3, 2, 1 ]

//ans 11

var arr5=[1,2,3,4,5]
let ans8=arr5.includes(5)
    console.log(ans8);
    //output true

//answer 12

var data="javscript"
let ans4=data.length
console.log(ans4);
//output 9 

//answer 13

var arr4="i often take a walk with my dog in the evening.His dog follows him everywhere.I don't feed my dog in the morning"
var ans5=arr4.replace("dog","cat").replace("dog","cat").replace("dog","cat");
console.log(ans5);

//output i often take a walk with my cat in the evening.His cat follows him everywhere.I don't feed my cat in the morning

//answer 14
let input="hire the top 1% freelance devlopers";
 let word=input.split(" ");
console.log(word);

let ans6=word.slice(0,4)
console.log(ans6);
//output  [ 'hire', 'the', 'top', '1%' ]

// answer 15

let input1=['5',32,'Daniel']
let ans7=input1.toString()
console.log(ans7);
//output 5,32,Daniel
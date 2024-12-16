// higher order function

// filter function (method used to filter in array)

let data =[11,22,33,44,55]

// let arr=data.filter(function(ele,index){
//     return ele>=30;
// })
// console.log(arr);

//find method (used to findout the element in array)

// let arr = data.find((ele,index)=>{
//     return ele===33;
// })
// console.log(arr);

//output :33

// findindex method (find index count in array )

// let arr=data.findIndex((ele,index)=>{
//     return ele===44;
// })
// console.log(arr);

//output 3;

//some method(condition chek true or false)

// let arr =data.some((ele,index)=>{
//     return ele <=30;
// })
// console.log(arr);

//output :true

//every  method (every element chek => true either false)

// let arr=data.every((ele,index)=>{
//     return ele<=13;
// })
// console.log(arr);

//output : false

//includes method (specifix condition in array include to condition check (true or false))

// let arr=data.includes((ele,index)=>{
// })
// console.log(data.includes(66));

//output false => beause arrey include in 66 number

//indexof method(find method as it as indexof)

// let arr=data.indexOf((ele,index)=>{
// })
// console.log(data.indexOf(33));

//output 2 

//foreach loop (no return statment use)

// let arr=data.forEach((ele,index)=>{
//     console.log(ele);
    
// })

//output 
// 22
// 33
// 44
// 55

//map function(return statement use ans new arry create)

let arr=data.map((ele,index)=>{
    return ele*2;
})
console.log(arr);

//output [ 22, 44, 66, 88, 110 ] new array create
//object per array

let person ={
    name:"shruti",
    age :20,
    email:"kathiriyashruti3@gmail.com",
    hobby :["eating","music","dancing"],
    address : "seffron luxzria,surat",
    zipcode :395010
};
// console.log(person.name);
// console.log(person.age);

    //for in loop  =>
    //  array and object impliment
    // <object>
    for(let i in person){
        console.log(i,person[i]);
        
    }

    //for in loop =>
        // array and object implement
    //array

    let data=[11,22,33,44];
    for(let i in data){
        console.log(i,data[i]);
        
    }

    //for of loop =>array implemet
    for(let i of data){
        console.log(i);
    }

    //object with array

    let color=[
        {id :1,name:"pink"},
        {id :2,name:"black"},
        {id :3,name:"red"},
        {id :4,name:"sky"},
        {id :5,name:"white"},
        {id :6,name:"red"},
        {id :7,name:"orange"},
        {id :8,name:"yellow"},
        {id :9,name:"purple"},
    ]
    console.log(color);
    console.log(color[0].name);
    function gernratequote(){
        let number=Math.floor(Math.random) * 10;
    }

    
    document.getElementById("num1").innerHTML =
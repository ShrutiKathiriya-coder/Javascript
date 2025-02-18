// timnig in two function allow:=
//=> 1. settimeout
//=>2. settimeinterval
// =>  both funtion is asynchornous make


//1=> set time out => only one time executes base on time.

// let id=setTimeout(()=>{
//    let date=new Date;
//    let time=date.toLocaleTimeString();
//    console.log(time);
   
// },4000);
// console.log("timeout id",id);

// //2 => set time interval=> continue exexutes base on time interval.
// let id1=setInterval(()=>{
//     let date=new Date;
//     let time=date.toLocaleTimeString();
//     console.log(time);
    
// },2000);
// console.log("set interval id",id);



//clear timeout and clear interval
// => both function is asynchornous to synchornus convert 
//=> both arugument in-> id lese

//=> settime(id) cresh in both function

// let id2=clearTimeout(()=>{
//     console.log("hello....");
    
// },2000)
// clearTimeout(id2)

// let id3=clearInterval(()=>{
//     console.log("helooooo");
    
// },1000);
// clearTimeout(id3)


//example

let id;
document.getElementById("start").addEventListener('click',()=>{
    id=setInterval(()=>{
        let date=new Date;
        let time=date.toLocaleTimeString();
        document.getElementById("timing").innerHTML=time;
    },1000);
})

document.getElementById("stop").addEventListener('click',()=>{
    clearInterval(id)
})
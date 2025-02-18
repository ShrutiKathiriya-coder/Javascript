//couneter

let counter=10,id;
// document.querySelector('button').addEventListener("click",()=>{
//     id=setInterval(()=>{
//         if(counter>0){
//             counter--;
//             document.getElementById("count").innerHTML=counter;
//         }else{
//             console.log("timer ended!!");
//             clearInterval(id);
//         }
//     },1000)
// })

// 2 method


function countfun(num){
    document.getElementById("count").innerHTML=num;
    if(num>0){
        id=setTimeout(()=>{
            countfun(--num)
        },1000)
    }else{
        console.log("time end");
        clearTimeout(id);
    }
}
document.querySelector('button').addEventListener("click",()=>{
    countfun(counter);
})
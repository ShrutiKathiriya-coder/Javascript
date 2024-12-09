// defination  perform to a specific task as well aa work

// Syntax

function fun_name(){
    console.log("heloo world");
    
}
fun_name()

//programs
//   1)  Print out 10 to 1
 
function num(){
    let i=10;
    while (i>0) {
        console.log(i);
        i--
    }
}
num()

// 2 Print out 51 to 79
function n(){
    let j = 51;
    while (j <= 79) {
        console.log(j);
        j++;
    }

}
n()

//3 Enter n and print out 1 to n
// function no(){
//     var n=+(prompt("enter n number :"));
//     for(var i=1;i<=n;i++){
//         console.log(i);
        
//     }
// }
// no();

// 4) Enter n and print out -n to 1

function number(){
    var n=7;
    for(let i=-n;i<=1;i++){
        console.log(i);
        
    }
}
number()

// 5) Enter n and print out -n to n

function num2(){
    var n=6;
    for(let i=-n;i<=n;i++){
        console.log(i);
        
    }
}
num2()

// 6) Enter n and print out odd numbers up to n

function odd(){
    var n=30;
    for(var i=1;i<=30;i+=2){
        console.log(i)
    }
}
odd()

// 7) Enter n and print out even numbers up to n

function even(){
    var n=10;
    for(let i=2;i<=n;i+=2){
        console.log(i)
    }
}
even()

// 8) Series print out 1, 4, 3, 16, 5, 36.......

function num3(){
    for(var i=1;i<=5;i++){
        if(i%2==1){
            console.log(i);
            
        }
        else{
            console.log(i*i);
            
        }
    }   
}
num3()

// 9) Series print out 1, 1, 2, 3, 5, 8 .....

// function num4(){
//      let a = +prompt("Enter a Number:");
//     let x = 0, y = 1, z;
//     let i = 0;

//     while (i <= a) {
//         console.log(x);
//         z = x + y;
//         x = y;
//         y = z;
//         i++;
//     }

// }
// num4()

// 10) Series print out 1, 4, 12, 32, 80, 192, 448 .......

function num5(){
    var a=1;
    for(var i=1;i<=5;i++)
    {
        console.log(a*i);
        a*=2;
    }
}
num5()

// 11) Find out the factorail of a given number in javascript. 

// function num6(){
//     for(var i=1;i<=5;i++){
//         a*=1;
//         console.log(a);
        
//     }
// }
// num6()

// ans-12 enter n and print out total number sum odd

function odd1(){
    var n =5;
    var sum = 0;
for (var i = 1; i <= n; i++) {

  if (i % 2 !== 0) {
    sum += i; 
  }
}
console.log("The sum of odd numbers up to " + n + " is: " + sum);
}
odd1()

//ans 13 enter n and print out total number sum even

// function even1(){
//     let s = 6;
//     let summ = 1;
//     for (let i = 1; i <= n; i++) {

//     if (i % 2 !== 1) {
//         summ += i; 
//     }
//     }
//     console.log("The sum of odd numbers up to " + n + " is: " + summ);
// }
// even1()


//ans -14

function num6(){
       var num=295;
         var sum=0;
    while(num>0){
        var s=num%10;
        sum+=s;
        num=(num - (num%10))/10;
    }
    console.log(sum);
}
num6()

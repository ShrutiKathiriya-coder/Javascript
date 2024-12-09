// parameter function in method od four
//1) no arg no return
//2) no arg with return
//3) with arg no return
//4)with arg with return

//1) no arg no return
function saygriting(){
    console.log("heloo world...!!");
}   
saygriting()

//2) no arg with retuen

function griting(){
    return ("good evening..!!")
}
griting()

//3)with arg no return

function addition(num1,num2){              //argument
    console.log("addition is :",num1+num2);
    
}
addition(10,10) //parameter

//4) with arg with return

function voting(age){
    if(age>18)
        return "you are eligable for vote"
    else
        return "you are not eligable for vote"
}
console.log(voting(20));



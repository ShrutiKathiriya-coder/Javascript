//try catch

//the try statment defins a code block to run(to try)

//try catch statement defines a code block to handle any error

//the finally statment defines a code block to run regardles of the result

try {
    var a=10;
    b=20;
    console.log("addition",a+b);
    
} catch (error) {
    console.log("error handle the catch block");
    
}

//error 

try {
    var c=20;
    // var d=20;
    console.log("division",c/d);
    
} catch (error) {
    console.log("d is not define");
    
}
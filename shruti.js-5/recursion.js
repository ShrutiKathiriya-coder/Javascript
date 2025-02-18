//recursion
//=> function call itself

//example
//1) recursion
 function sayhello(n){
    console.log("inside function called ",n);
        if(n<5){
            sayhello(++n);
        }
        console.log("function finished ",n);
        
}
sayhello(1)

//output

// inside function called  1
//  inside function called  2
//  inside function called  3
//  inside function called  4
//  inside function called  5
//  function finished  5
//  function finished  5
//  function finished  4
//  function finished  3
//  function finished  2

//2) factorial number 5!= 5*4*3*2*1  or
                  // 5*4!=>4*3!=>3*2!=>2*1!=>1

function fact(n){
    if(n==1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}            
console.log(fact(5));

//output => 120


//3 fibonaci number 1 1 2 3 5 8 13

function fibonaci(){
    if(num=1){
        return 1;
    }else{
        num++;
        return num+1;
       
    }
}
console.log(fibonaci(13));
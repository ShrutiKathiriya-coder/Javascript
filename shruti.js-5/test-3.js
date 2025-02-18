 // ans=1 Write JS Program to check number is Palindrome or not 

// let num =111;
// let orginialnum=num;
// let revers=0;
// if(orginialnum===revers){
//     console.log(num + "palindrom");
// }
// else{
//     console.log(num + "not palindrom");
    
// }

// ans=2 Print Series 1, 4, 3, 16, 5, ....

    // for(let i=1;i<=5;i++){
    //     if(i%2==1){
    //         console.log(i);
            
    //     }
    //     else{
    //         console.log(i*i);
            
    //     }
    // }
    //output=1 4 3 16 5


//3 Print Multiplication table of n =

    var n=10;
    for(var i=1;i<=10;i++){
        console.log("10 * =" +i+ " = "+n*i);
        
    }

    
    //output
// 10 * =1 = 10
// 10 * =2 = 20
// 10 * =3 = 30
// 10 * =4 = 40
// 10 * =5 = 50
// 10 * =6 = 60
// 10 * =7 = 70
// 10 * =8 = 80
// 10 * =9 = 90
// 10 * =10 = 100


//4 find out sum of digit of given number =
    var num=295;
    var sum=0;
    while(num>0){
        var s=num%10;
        sum+=s;
        num=(num - (num%10))/10;
    }
    console.log(sum);

    // output =29


// 5 print series 1, 1, 2, 3, 5

    // var x=1;
    // var y=1;
    // for(var i=1;i<=5;i++){
    //     console.log(x);
    //     var i=x;
    //     x=y;
    //     y=i+x;
    // }
    //output = 1 1 2 3 5


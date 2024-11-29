// //nested-if-else

var a=30;
var b=40;
var c=50;
if (a>b) {
    if(a>c){
        console.log("bigest num :"+a);
    }
    else{
        console.log("big num :"+c);  
    }
}
else{
    if(b>c){
        console.log("biggest num is :"+b);
        
    }
    else{
        console.log("bigg num is"+c);
        
    }
}


//ladder if -else

let d=40,e=50,f=70;

if(d>e && d>f){
    console.log("largest num "+d);
    
}
else if(e>d && e>f){
    console.log("large num is"+e);
    
}
else{
    console.log("larg num is"+f);
    
}
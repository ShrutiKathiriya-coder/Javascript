// answer 1 call a function without argument at thet time prinnt message good morning

function gd(){
    console.log("good morning..! ");
    
}
gd()

//output : good morning..!

// answer 2 circle

//ar=p*r*r

const p = 3.14;
function circle(r){
    return p*r*r;
}
console.log(circle(32));

//output : 3215.36

// answer 3 tringle

// area=l*h/2

function tringle(l,h){
    return (l*h)/2;
}
console.log(tringle(6,6));

//output : 18

// answer 4 rectengle

// area = l*h

function rectengle(l,h){
    return l*h;
}
console.log(rectengle(3,3));

//output : 9

//answer 5 ((b*b)(4*a*c)/(2*a)) 

function sum(b,a,c){
    return (b*b)*(4*a*c)/(2*a)
}
console.log(sum(10,20,30));

//outout : 6000

// answer 6 (a*a)+(2*a*b)+(b*b)

function sum2(a,b){
    return (a*a)+(2*a*b)+(b*b);
}
console.log(sum2(8,9));

//output : 289

// answer 7  f to c
function feh(c,f){
    return c=(f-32)/1.8
}
console.log(feh(4,3));
//output -16.11111111111111

// answer 8 c to f

function cel(c,f){
    return f=(c*1.8)+32;
}
console.log(cel(2,3));
//output : 35.6

// answer 9 odd or even

function sum3(n){
    if(n%2==0){
        console.log("even number ",n);
        
    }
    else{
        console.log("odd number ",n);
        
    }
}
sum3(6);

// output : even number  6

// answer 10 swapping without third varible

function swapping(a,b){
    console.log("before swapping ",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("after swaaping ",a,b);
    
}
swapping(10,20);


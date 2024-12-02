//ans 1

var units = 460;
var amount = 80;


if (units > 50) {
    amount += (units - 50) * 2;
    units = 50;
}
if(units > 150) {
    amount += (units - 150) * 3;
    units = 150;
}
if (units > 250) {
    amount += (units - 250) * 4;
    units = 250;
}
if (units > 150) {
    amount += amount * 0.2;
}
amount += units * 1;

console.log("Total Amount ", amount);

// ans-2

var season=5;
switch(season){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("winter");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log("summer");
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        console.log("monsoon");
        break;
        default:
            console.log("invalid season");
            
}
//ans 3

var p=3000;
var n=3;
var r;
if(n>5 && n<=8){
    r=3;
}
else if(n>5 && n<=8){
    r=5;
}
else if(n>8 && n<=12){
    r=12;
}
else{
    r =15;
}
var i=(p*r*n)/100;
console.log("amount ="+p);
console.log("year ="+n);
console.log("rate ="+r+"%");
console.log("intreset ="+i);

// ans -4

// var age=20;
// if (age>=18) {
//     console.log("you are eligable for vote");
    
// }
// else{
//     console.log("ypu are not eligable for vote");
    
// }


//ans 5
var age=70;
if(age<=12){
    console.log("you are child");
}
else if(age>13 && age<=19){
    console.log("you are tenegers");
}
else if(age>20 && age<58){
    console.log("you are young");
}
else if(age>=58){
    console.log("you are senior citizen");   
}

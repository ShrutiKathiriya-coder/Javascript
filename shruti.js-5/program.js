// program-2c program to check whether a person is eligble for a voting or not?

var age=20;
if(age>=18){
    console.log("eligable for vote");
    
}else{
    console.log("not eligable for vote");
    
}

//program 3 calculate the gross on the salary
//basic                    HRA      DA
//up to 5000               8%       20%
//5000 to 10,000           12%      30%
//10,000 to 15,000         15%      40%
//15000 to above           20%      50%

var basic =10000;
var hra,da,gross;
if(basic<=5000){
    hra = basic*0.08;
    da = basic*0.20;
    gross = basic+hra+da;
    console.log("gross salry is" +gross);
}
else{
    if(basic<=10000){
        hra = basic*0.12;
        da = basic*0.30;
        gross = basic+hra+da;
        console.log("groess salary" + gross);  
    }
}

//program 5 

var marks=99;
if(marks>=75){
    console.log("your grad is A");
    
}
else if(marks>=60 && marks<75){
    console.log("your grad is B");
    
}
else if(marks>=45 && marks>60){
    console.log("your grad is C");
    
}
else if(marks>=35 && marks>45){
    console.log("your grad is D");
    
}
else{
    console.log("sorry?? you are fail...");
    
}

// program 6

var x=2000;
var y=300;
if(x>=2000 && x<=3000){
    console.log("print the value 2000 to 30000");
}




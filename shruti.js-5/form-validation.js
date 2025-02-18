// ..form validation

// let validationform = document.getElementById("registraionform");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let dob = document.getElementById("dob");
let hobbies = document.getElementById("hobby");
let form = document.querySelector('#registraionform');

form.addEventListener("submit",(event)=>{
    event.preventDefault();

        clearErrors();
     let gender = document.getElementById('input[name ="gender"]:checked');

    if(validateform()){
        console.log("submit form");
        form.reset();
     }
   
    console.log(event);
    console.log(fname.value);
    console.log(lname.value);
    console.log(email.value);
    // console.log(gender.value);
    console.log(password.value);
    console.log(dob.value);
    console.log(hobby.value);
     
});


function validateform(){
    let isvalid = true;

    if(fname.value === ""){
        document.getElementById("fnameerr").innerHTML ="fname is not empty"
        isvalid = false;
    }else if(fname.value.length <3){
         document.getElementById("fnameerr").innerHTML ="fname length minimum 3 charcter"
         isvalid = false;
    }
    
    if(lname.value === ""){
        document.getElementById("lnameerr").innerHTML ="lname is not empty"
        isvalid = false;
    }else if(lname.value.length <3){
         document.getElementById("lnameerr").innerHTML ="lname length minimum 3 charcter"
         isvalid = false;
    }

    if(email.value === ""){
        document.getElementById("emailerr").innerHTML ="email is not empty"
        isvalid = false;
    }
    if(pass.value === ""){
        document.getElementById("passerr").innerHTML ="password is not empty"
        isvalid = false;
    }else if(pass.value.length <3 && pass.value.length>15){
         document.getElementById("lnameerr").innerHTML ="password length is 3 to 15 charcter"
         isvalid = false;
    }else{
        let validpass=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!validpass.test(pass.value)){
            document.getElementById("passerr").innerHTML="password is almost one upeer,lower and digit & special charcter"
            isvalid = false;
        }
    }
    if(dob.value === ""){
        document.getElementById("doberr").innerHTML="dob is not empty"
        isvalid = false;
    }
    if(hobby.value === ""){
        document.getElementById("hobby").innerHTML="hobby select one"
        isvalid = false;
    }
    if(!gender){
        document.getElementById("gendererr").innerHTML="gender select one"
        isvalid = false;
    }
    return isvalid;
   
};

function clearErrors(){
    let errors=document.querySelectorAll(".error");
    for(let i =0;i<errors.length;i++){
        errors[i].innerHTML="";
    }
};
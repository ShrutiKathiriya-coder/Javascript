//1 document.getelementbyid
//2 document.getelementbytagname
//3  document.getelementbyclassname
//4 document.getelementbyquerryselcotr and qurerryselctorall

//1 document.getelement by id

let h2=document.getElementById('name')
console.log(h2);
h2.style.color="blue";
h2.style.fontFamily ="sans-serif";
h2.innerHTML="hello javascript";

//2 document.getelement by tagname

// let data=document.getElementsByTagName('p');
// console.log(data);

// data[0].style.color = "red";



//3 document.getelementbyclassname

let data=document.getElementsByClassName('java');
console.log(data);
data[0].style.color ="green";
data[0].style.fontSize ="50px"

//4 querryselctor ans querryselctorbyall

let shruti=document.querySelector(".abc")

console.log(shruti);

shruti.style.color ="orange";

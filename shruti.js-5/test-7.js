//answer 1
class school {
    student(name, email, number) {
        console.log("Student Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${number}`);
    }

    faculty(name, email, number) {
        console.log("Faculty Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${number}`);
    }
}

let data = new school();

data.student("shruti kathiriya", "shrutikathiriya@gmail.com", "3425678532");

data.faculty("Girish Sir", "girishsir@gmail.com", "1234567891");
    //output
//Name: shruti kathiriya
//Email: shrutikathiriya@gmail.com
//Contact: 3425678532
// Faculty Details:- 
// Name: Girish Sir
// Email: girishsir@gmail.com
// Contact: 1234567891
// ........................................................................................................................
//answer 2

class Person {
    constructor(name, age) {
      this.name = name; 
      this.age = age;
    }
  }
  
  class emp extends Person{
    constructor(name, age, job) {
      super(name,age);
      this.job=job
    }
  
    print() {
      console.log("Name:", this.name);
      console.log("Age:", this.age);
      console.log("class job :", this.job);
    }
  }
  
  let employee = new emp("shruti kathiriya", 20, "it student");
  employee.print();
  
  //output Name: shruti kathiriya, Age: 20, class job : it student

//..................................................................................................................................
//answer 3

class con{
    constructor(){
        console.log("hello good evening !!!");
        
    }
}
let obj=new con(); //output  hello good evening

//answer simple message!!!

//........................................................................................................................
// anser 4

class Shape {
    constructor() {
        
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();  
        this.radius = radius; 
    }

   
    area() {
        return 3.14 * this.radius * this.radius;
    }
}

// Define Rectangle class extending
class Rectangle extends Shape {
    constructor(width, height) {
        super();  
        this.width = width;  
        this.height = height; 
    }

   
    area() {
        return this.width * this.height;
    }
}


let cri = new Circle(3);
console.log(`Circle Area: ${cri.area()}`); //output Circle Area: 28.259999999999998


let rec = new Rectangle(2,4);
console.log(`Rectangle Area: ${rec.area()}`); //output Rectangle Area:8
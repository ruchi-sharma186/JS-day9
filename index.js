//Regular function

 function num(name) {
    console.log("Hello Regular function is there", name);
    
 }
num("ruchi");

 //Arrow function

 const fun1 = () =>{
    console.log("Hey.....This is Arrow function");
    
 }
 fun1();

 // function Expression

 const fcn2 = function () {
    console.log("Hello.... This is 3rd way of function");
    
 }
 fcn2();

 function ShowMessage() {
    alert("hello World");
 }
 ShowMessage();

 function num1(age) {
    return age; 
 }
 console.log(num1(55));
 
 //Ques1
  
 function num2() {
    console.log("Zero parameters");
 }
num2();

 //Ques2
  let num3 = () => {
console.log("arrow funtion");
}
num3();

//Ques

 // This is a function that takes three pieces of information: first name, last name, and age
function Info(firstName, lastName, age) {
    // It will return a message like "A is 99 years old"
    return firstName + " " + lastName + " is " + age + " years old";
}

// Example of using the function
console.log(Info("A", "Smith", 99));





//input parameters
console.log(num1(55));

function outer(length, breadth) {
    function inner() {
        console.log(length, breadth);
        
    }
    inner();
}
outer(5, 5);
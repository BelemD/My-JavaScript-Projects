const prompt = require("prompt-sync")({sigint:true});

console.log("WELCOME TO BELEM'S CALCULATOR\n");
let userInput;

let num1;
let num2;
let cont; 
let pie;


function Answer(){
  console.log("For Addition type 1\nFor Subtraction type 2\nFor Multiplication type 3\nFor divison type 4\nFor modulus type 5\nTo calculate for pi type 6\nFor the cos of an angle type 7\nFor the sin of an angle type 8\nTo calculate for the tan of an angle type 9\nTo calculate for the exponential of values type 10\nTo calculate for the squareroot of a number type 11\nFor the square of a value type 12\n");
  console.log("Please pick a number\n");
  userInput = parseInt(prompt());
  
  if (userInput === 1){
    
    Addition();
  } 
  else if (userInput === 2){
    
    console.log(Subtraction());
  }
  else if (userInput === 3){
      
    console.log(Multiplication());
    
  }
  else if (userInput === 4){
      
    Division();
  }
  else if(userInput === 5){
    Remainder();
  }
  else if(userInput === 6){
    _pi();
  }
  else if(userInput === 7){
    _cos();
  }
  else if(userInput === 8){
    _sin();
  }
  else if(userInput === 9){
    _tan();
  }
  else if(userInput === 10){
    _exp();
  }
  else if(userInput === 11){
    _squareroot();
  }
  else if(userInput === 12){
    _square();
  }
  else{
    console.log("Pick another number\n");
    
    quit();
  }
  
}

function Addition() {
  console.log("First digit.");
  num1 = parseFloat(prompt(""));

  console.log("Second digit.");
  num2 = parseFloat(prompt(""));

  result = num1 + num2;
  console.log(num1 + " + " + num2 + " = " + result);

  quit();
}

function Subtraction() {
  console.log("First digit.");
  num1 = parseFloat(prompt(""));

  console.log("Second digit.");
  num2 = parseFloat(prompt(""));
  
  result = num1 - num2;
  console.log(num1 + " - " + num2 + " = " + result);

 
  quit();
}

function Multiplication() {
  console.log("First digit.");
  num1 = parseFloat(prompt(""));

  console.log("Second digit.");
  num2 = parseFloat(prompt(""));

  
  result = num1 * num2;
  console.log(num1 + " * " + num2 + " = " + result);

  quit();
}

function Division() {
  console.log("First digit.");
  num1 = parseFloat(prompt(""));

  console.log("Second digit.");
  num2 = parseFloat(prompt(""));
  
  result = num1 / num2;
  console.log(num1 + " / " + num2 + " = " + result);

  
  quit();

}
function Remainder() {
  console.log("First digit.");
  num1 = parseFloat(prompt(""));

  console.log("Second digit.");
  num2 = parseFloat(prompt(""));
  
  result = num1 % num2;
  
  console.log(num1 + " % " + num2 + " = " + result);

  
  quit();

}

function _pi() {
 
   console.log("For area of a circle type 50\nFor the circumference of a circle type 60\nFor the area of a semi circle type 70\nFor the perimeter of a semi circle type 80")
   pie = parseFloat(prompt(""));
   
   console.log("Input the raius");
   num2 = parseFloat(prompt(""));

  if (pie === 50) {
    
    result = Math.PI * (Math.pow(2, num2));

    console.log(result);
   
  }
  else if (pie === 60) {
 
    result = 2 * (Math.PI * num2);
    console.log(result);
  
  }
  else if (pie === 70) {

    result = 0.5 * (Math.PI * Math.pow(2, num2));

    console.log(result);
  
  }
  else if(pie === 80){

    result = 0.5 * ((Math.PI * num2) + num2); 

    console.log(result);
    
  }
   else {
    result = "WRONG INPUT";
    console.log(result);
   
  }
  quit();

}
function _cos() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));


  result = Math.cos(num1);

  console.log("cos "  + num1 +  " = " + result);

  
  quit();
}
function _sin() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));

  result = Math.sin (num1);

  console.log("sin " + num1 + " = " + result);

  
  quit();
}
function _tan() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));

  result = Math.tan(num1);

  console.log("tan "  + num1 + " = " + result);

  
  quit();
}
function _exp() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));

  result = Math.exp(num1);

  console.log("exp" + num1 + " = " + result);

  quit();
}

function _squareroot() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));

  result = Math.sqrt(num1);

  console.log("Square root of " + num1 + " = " + result);

  quit();
}
function _square() {
  console.log("Input a digit.");
  num1 = parseFloat(prompt(""));

  result = Math.pow(num1, 2);

  console.log("The square of " + num1 + " = " + result);

  quit();
}

function quit() {

  console.log("To continue type 0\nTo exit type 9\n");

  cont = parseInt(prompt(""));
  if (cont === 0) {
    Answer();
  }else if (cont === 9) {
    return "Goodbye";
    
  }else{
    console.log("Please pick a valid number \n");
    Answer();
  }
}

console.log(Answer());
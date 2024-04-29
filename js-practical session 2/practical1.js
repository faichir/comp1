//IF, IF...ELSE, ELSE...IF and SWITCH STATEMENT

//if statements- used when a specified condition is true
//Example

//a.
let hour = 24; //declare the variable

if (hour > 18) {
    console.log("Good day"); //output the results
};

//b.
let time = 18; 

if (time < 20) {
    console.log("We are on time");
};


//else statements-used when the same condition is false
//Example
//a.
let a = 100;  
let b = 200;

if(a > b) {
    console.log("a is greater than b");  
} else {
    console.log("b is greater than a");
};
//b.
let marks = 100;
if(marks < 50) {
    console.log("You failed");
} else {
    console.log("You passed");
}

//else if-used if the first condition is false
let x = 50;

if (x > 60) {
    console.log("Good morning");
} else if (x > 20) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

//switch statement specify many alternative blocks of code to be executed
const pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}
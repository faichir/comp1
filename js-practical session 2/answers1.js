
// function declaration
function functionname(g1, g2, g3) 
{
    return g1 + g2 + g3; 
}
const value = functionname(8, 2, 3); 
console.log(value);


// function expressions
const square = function (number) 
{
	return number * number;
};
const x = square(4);    // x gets the value 16
console.log(x);

// arrow functions

const z = ["Aluminium", "Sodium"];

const b = z.map((s) => s.length);

console.log("Using Arrow Function ", b); //output :[9, 6]




// callback function
function multiplyByTwo(n, callback) 
    {
    var result = n * 2;
    callback(result);
   }
    
   function logResult(result) 
   {
     console.log(result);
   }
    
   multiplyByTwo(6, logResult); //output: 12


// using the constructor function
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
   }
    
   let person = new Person("John Smith", 30, "male");
   console.log(person.name); // Output: "John Smith"
   console.log(person.age);  // Output: "30
   console.log(person.gender);  // Output: "male"
   
// default parameters
 
function greet(name = "John Doe") {
	console.log(`Hello, ${name}!`);
}
 
greet(); //output: Hello, John Doe!

// higher-order functions
function operate(func, x, y) {
    return func(x, y);
  }
  
  function add(a, b) 
  {
    return a + b;
  }

  // Using the higher-order function with different operations
  console.log(operate(add, 3, 4));       // Output: 7 (3 + 4)
 
  
 // using the closure function

function createCounter() {
 let count = 0;
 return function()
  {
    return count++;
  }
}
const myCounter = createCounter();

console.log(myCounter()); // Output: 0
console.log(myCounter()); // output:1
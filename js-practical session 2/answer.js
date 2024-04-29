//Code Exercises
//1. Declare a variable using let and initialize it with 1000 shillings
let shillings = 1000;

//2. Write an if statement to check if the shillings is greater than 500 and print I have money
if(shillings > 500) {
    console.log("I have money");
};

//3. Write an if...else statement to check if the shillings is greater than 2000 and print I have less money
if (shillings > 2000) {
    console.log("less money");
} else {
    console.log("I have less money");
};

//4. Assign this variable, let grade to 80
let grade = 80;

//5. Write an if statement to assign grade is greater or equal to 90
if (grade >= 90) {

//6. Print you got an A
  console.log("You got an A");

//7. Write an else if statement to assign grade is greater or equal to 80
} else if (grade >= 80) {

//8. Print You got a B
  console.log("You got a B");

//9. Write an else if statement to assign grade is greater or equal to 70
} else if (grade >= 70) {

//10. Print You got a C
  console.log("You got a C");

//11. Write an else statement and print You did not pass
} else {
  console.log("You did not pass");
}

//SWITCH STATEMENT ANSWERS
//1. Declare the day variable that holds the day number and the day name variable (dayName).
let day = 3;
let dayName;
//2. Get the day of the week based on the day number using the switch statement. 
//If the day is 1, the day of the week is Sunday. If the day is 2, the day of the week is Monday, and so on.
switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
//3.Output the day of the week to the console.
console.log(dayName); // Tuesday

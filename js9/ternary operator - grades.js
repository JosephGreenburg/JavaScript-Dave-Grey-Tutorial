//Conditionals: Ternary Operator - Grades

//Syntax
//conditional ? ifTrue : ifFalse;

let testScore = 90;
let myGrade = testScore > 89
 ? "A"
 : testScore > 79
 ? "B"
 : testScore > 69
 ? "C"
 : testScore > 59
 ? "D"
 : "F";

 console.log(`My grade is ${myGrade}`);
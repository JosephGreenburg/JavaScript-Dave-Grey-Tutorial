//Conditionals: If statements, like a waterfall

let grade;
function gradeFromTestScore(testScore) {
if(testScore >= 90) {
    grade = 'A';
}  else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
return grade;
}
console.log(gradeFromTestScore(80));
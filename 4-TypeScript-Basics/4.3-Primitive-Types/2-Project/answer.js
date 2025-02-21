console.log("======================= Simple Student Grading System =======================");
//1. Declare and initialize student's marks for two subjects (number type)
var mathMarks = 75;
var computerMarks = 98;
//2. Calculate the total marks obtained.  
var totalMarksObtained = mathMarks + computerMarks;
//3. Compute the average marks.
var totalAverageMarks = totalMarksObtained / 2;
//4. Assign student name (string type)
var studentName = "Prabin Poudel";
//5. Determine the grade based on the average marks:
var grade = totalAverageMarks >= 80 ? "A" : "B";
//6. Boolean: Check if the student has passed using a boolean value
var isPassed = totalAverageMarks >= 40; // True if marks are 40 or above
//7. Display the results using console.log(), including the student’s name, total marks, average marks, grade, and pass status. 
console.log("Student Name:", studentName);
console.log("Total Marks:", totalMarksObtained);
console.log("Average Marks:", totalAverageMarks);
console.log("Grade:", grade);
console.log("Passed:", isPassed);

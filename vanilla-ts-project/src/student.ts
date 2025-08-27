// src/student.ts

// Step 1: Define a custom type for Grade
type Grade = "A" | "B" | "C" | "D" | "F";

// Step 2: Define a Student interface
interface Student {
  name: string;
  age: number;
  grade: Grade;
}

// Step 3: Function to display student info in the DOM
function displayStudentInfo(student: Student): void {
  const greetingElement = document.getElementById("greeting");

  if (greetingElement) {
    greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
  }
}

// Step 4: Create some students
const student1: Student = { 
    name: "Alice", 
    age: 20, 
    grade: "A" };
const student2: Student = { 
    name: "Bob", 
    age: 22, 
    grade: "C" };

// Step 5: Call function
displayStudentInfo(student1);

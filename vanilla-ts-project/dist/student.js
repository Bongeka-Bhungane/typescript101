"use strict";
// src/student.ts
// Step 3: Function to display student info in the DOM
function displayStudentInfo(student) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
    }
}
// Step 4: Create some students
const student1 = {
    name: "Alice",
    age: 20,
    grade: "A"
};
const student2 = {
    name: "Bob",
    age: 22,
    grade: "C"
};
// Step 5: Call function
displayStudentInfo(student1);

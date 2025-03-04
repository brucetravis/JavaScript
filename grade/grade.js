// Student Grade Analyzer
// Store student names and their grades in an array of objects.
// Use .forEach() to display student details.
// Find and highlight students who scored above a certain grade.


// Program to analyze a students grades

// An empty array of students
let students = []


// function to display the number of students
function display_students() {
    // Loop through the number of studnets in the array
    students.forEach((student, index) => {
        // Output the result in the console
        console.log(`${index + 1}. ${student.name} : ${student.mark} : ${student.grade} : ${student.status}`)
    })
}


// function to add a student to the array
function add_student() {
    // Prompt the user to enter the students name
    let studentName = window.prompt(`Enter the students name: `)
    // Handle case value when It coes to the string characters
    studentName = studentName
    .split(" ") // split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    
    // Prompt the user to enter the students Mark
    let studentMark = Number(window.prompt(`Enter the students mark: `))
    
    // students Grade
    let studentGrade = student_grade(studentMark)
    // students Status
    let studentStatus = student_status(studentMark)

    students.push({name: studentName, mark: studentMark, grade: studentGrade, status: studentStatus})

    // display the students
    display_students()
}


// function to handle a students grade
function student_grade(studentMark) {

    // If conditions to handle the grades
    if (studentMark >= 95) {
        return "A+"
    } else if (studentMark >= 90) {
        return "A"
    } else if (studentMark >= 85) {
       return  "B+"
    } else if (studentMark >= 80) {
        return "B PLAIN"
    } else if (studentMark >= 75) {
        return "C+"
    } else if (studentMark >= 70) {
        return "C"
    } else {
        return "D"
    }
}


// function to get the students status
function student_status(studentMark) {

    // If conditions to handle the grades
    if (studentMark >= 90) {
        return "pass"
    } else if (studentMark >= 80) {
        return "Almost pass"
    } else if (studentMark >= 70) {
       return  "Average"
    } else {
        return "Fail"
    }
}

add_student()



// // PROJECT

// // 1. To-Do List Manager
// // Store tasks in an array.
// // Use .forEach() to display the tasks in a list format.
// // Allow users to add, delete, or mark tasks as completed.


// // Array to store the tasks
// let tasks = []


// // function to display all the tasks
// function displayTasks() {
//     console.log("\nTO-DO LIST")
//     // Loop through all the tasks in the array
//     tasks.forEach((task, index) => {
//         // Set the initial status of a task as uncomplete
//         let status = tasks.completed ? "COMPLETE" : "UNCOMPLETE"
//         // Display all the tasks to the user with their status
//         console.log(`${index + 1}. ${task.name} : ${status}`)
//     })
// }

// // function to add the task
// function addTask(taskName) {
//     // Update the list By adding a task
//     tasks.push({name: taskName, completed: false})
//     // Inform the user that the task has been added to the list of tasks
//     console.log(`${taskName} added successfully, List Updated.`)
//     // display updated list
//     displayTasks()
// }


// // fucntion to delete/ remove a task from the list
// function deleteTask(index) {
//     // Condition to check If the index the user inputs is valid in order to delete efficiently
//     if (index >= 0 && index < tasks.length) {
//         // Inform the user that that thetask at the  specified index has been removed
//         console.log(`Task at index ${index}, ${tasks[index].name} removed successfully. List Updated.`)
//         // .splice() the list in order to remove and update the list
//         tasks.splice(index, 1)
//     } else {
//         // Display a message If a users index is not in the available indices
//         console.log("Invalid Index number")
//     }
//     // Display the Updated List/ the List available If the user enters the wrong index
//     displayTasks()
// }


// // Function to mark a task as complete
// function completeTask(index) {
//     // Condition to check If the index the user input is valid in order to update the status of a task efficiently
//     if (index >= 0 && index < tasks.length) {
//         // Update the status the task as true for this function
//         tasks[index].completed = true
//         // Display a message informing a user that the task has been completed
//         console.log(`${tasks[index].name} completed successfully.`)
//     } else {
//         // Inform the user if the index is invalid
//         console.log("Invalid Index. Below are the available tasks")
//         displayTasks()
//     }
// }



// addTask("Learn Coding")
// addTask("Build Ro&BRU")
// addTask("Blockchain Tutorial")
// addTask("Learn Python")
// deleteTask(1)
// completeTask(1)
// completeTask(2)







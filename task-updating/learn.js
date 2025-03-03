// REVISION

// PROJECT

// 1. To-Do List Manager
// Store tasks in an array.
// Use .forEach() to display the tasks in a list format.
// Allow users to add, delete, or mark tasks as completed.



// Array to store the amount of tasks
let tasks = []


// function to display all the tasks
function display_tasks() {
    console.log("\nTASK LIST")
    
    tasks.forEach((task, index) => {
        // status for each task
        let status = task.complete ? "COMPLETE" : "INCOMPLETE"

        // output each task on the console for the user  to see
        console.log(`${index + 1}. ${task.name} : ${status}`)
    })
}


// function to allow users add a task to the array of tasks
function add_task(taskName) {
    // push the task into the array to add the task
    tasks.push({name: taskName, complete: false})
    // inform the user that the task has been added successfully
    console.log(`${taskName} added successfully, success!`)
    // display all the tasks in the console
    display_tasks()
}


// function to delete a task(delete by the index)
function delete_task(index) {
    // condition to check that the index the user input is valid
    if (index >= 0 && index <= tasks.length) {
        // inform the user that the task has been removed
        console.log(`Task '${tasks[index].name}' at Index ${index} removed successfully`)
        // remove the task
        tasks.splice(index, 1)
    } else {
        // inform the user that their index is invalid
        console.log(`Invalid index, Please enter a valid index!`)
    }
}


// function to mark tasks as complete
function completeTask(index) {
    // condition to check if the index the user input is valid
    if (index >= 0 && index < tasks.length) {
        // Update the complete property of the index to true
        tasks[index].complete = true
        // Inform the user that the task has been completed
        console.log(`${tasks[index].name} complete.`)
    } else {
        // Infrom the user to enter a valid index
        console.log(`Invalid index, Please try again!!`)
        // display all the tasks
        display_tasks()
    }
}


add_task("Wake Up")
add_task("Pray")
add_task("Workout")
add_task("Bathe")
add_task("Brush my teeth")

delete_task(0)
delete_task(1)

completeTask(0)
completeTask(1)
completeTask(2)

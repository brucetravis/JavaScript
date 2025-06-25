const numberRendered = document.getElementById("number-rendered")
const decrease = document.getElementById("decrease-btn")
const reset = document.getElementById("reset-btn")
const increase = document.getElementById("increase-btn")


// Set the initial count to be 0
let count = 0


// decrease the number
decrease.addEventListener("click", () => {
    // decrease the count
    count --
    // Update the p tag to the latest value
    numberRendered.textContent = count
})

// reset the number
reset.addEventListener("click", () => {
    // reset the count to 0 because It has the latest value
    count = 0
    // Update the p tag to 0
    numberRendered.textContent = count
})


// increment the number
increase.addEventListener("click", () => {
    // Increment the count
    count ++
    // Store the number in local storage while converting It into a string
    localStorage.setItem("counters", JSON.stringify(count))
    // get the Item from the local storage
    localStorage.getItem("counters")
    // Update the p tag to the latest value
    numberRendered.textContent = count
})



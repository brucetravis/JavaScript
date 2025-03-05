// 8. Expense Tracker
// Store expenses with names and amounts.
// Use .forEach() to display the expenses in a table.
// Calculate and display the total expenses.


// An empty array of clients
let clients = []
// Track the client expenditure
let clientExpenditure = 0
// Each client will have a fixed total amount
let totalAmount = 50000
// Keep track of teh total number of clients
// let clientTotal = 0

// function to display the number of clients
function display_clients() {
    // Loop thorugh each client displaying them
    clients.forEach((client, index) => {
        // Display the output on the console
        console.log(`${index + 1}. Total: ${client.name} | Total: ${client.total} | Amount: ${client.amount} | Balance: ${client.balance} | Advice: ${client.advise}`)
    })
}

// function to calculate the client expenditure
function client_Expenditure(amountSpent) {
    // Check If the client has enought in the account to spend
    if (amountSpent > client_Balance()) {
        console.log(`Insufficient funds! Please top up your account.`)
        // return the current expenditure without updating It
        return clientExpenditure
    } else {
        clientExpenditure += amountSpent
        // return the cients expenditure
        return clientExpenditure
    }
}

// function to calculate the clients Balance
function client_Balance(totalAmount, clientExpenditure) {
    // return the clients balance
    return totalAmount - clientExpenditure
}

// function to advice clients
function client_advice(balance) {
    // conditions to advice clients
    if (balance === 0) {
        return `Balance depleted! 'account empty'`
    } else if (balance === totalAmount) {
        return `You should invest! 'sufficient funds'`
    } else if (balance >= 40000) {
        return `Spend wisely`
    } else if (balance <= 25000) {
        return `Balance almost depleted! 'spend wisely'`
    } else {
        return `Continue monitoring your expenses! 'sufficient funds`
    }
}

// function to add_clients to the system
function add_clients(clientName, amountSpent) {
    clientName = clientName
    .split(" ") // split the string into an array of words ["bruce", "travis"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")


    let previousSpent = clients.reduce((sum, client) => sum + client.amount, 0)
    let remainingBalance = totalAmount - previousSpent


    if (amountSpent > remainingBalance) {
        console.log(`Insufficient funds! ${clientName} cannot spend ${amountSpent}. Remaining balance: ${remainingBalance}`);
        return;
    }

    let clientBalance = client_Balance(totalAmount, amountSpent)
    // let updatedExpenditure = client_Expenditure(amountSpent)
    let clientAdvice = client_advice(clientBalance)

    clients.push({
        name: clientName, 
        total: totalAmount, 
        amount: amountSpent, 
        balance: clientBalance,
        advise: clientAdvice
    })
    
    console.log(`Client added successfully!`)
    console.log(`Total Number of clients: ${clients.length}`)

    // display the total number of clients
    display_clients()
}


add_clients("Bruce TRavis", 100)
add_clients("Matthew Levi", 5000)
add_clients("Hanna Murphy", 200)



// IDEAS
// Function to withdraw money
// Function to 

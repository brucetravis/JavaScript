// let billAmount = 100;
// let tipPercentage = 15;
// let numberOfPeople = 4;

// let tip = (billAmount * tipPercentage) / 100
// let total = billAmount + tip
// let totalPerPerson = total / numberOfPeople

// // function to calculate the tip
// function calculateTip(bill, tipPercent, people) {
//     const tip = (bill * tipPercent) / 100
//     const total = bill + tip
    
//     return {
//         tipPerPerson: tip / people,
//         totalPerPerson: total / people
//     }
// }

let tipForm = document.getElementById("tipForm")
let bill = document.getElementById("billId")
let tip = document.getElementById("tipId")
let people = document.getElementById("peopleId")
let calculatorBtn = document.getElementById("calculatorBtn")
let totalBillId = document.getElementById("totalBillId")
let totalBillTipId = document.getElementById("totalBillTipId")


tipForm.onsubmit = (e) => {
    // prevent the default behaviour of the form 
    e.preventDefault()

    // convert the number strings into decimals/floats
    const billValue = parseFloat(bill.value)
    const tipValue = parseFloat(tip.value)
    const peopleValue = parseFloat(people.value)


    // calculate the tip
    let tipTotal = (billValue * tipValue) / 100
    // the total bill to be paid
    let totalBill = billValue + tipTotal
    // Amount to be paid by each person
    let personalBill = totalBill / peopleValue
    
    totalBillId.value = personalBill
    totalBillTipId.value = totalBill
}
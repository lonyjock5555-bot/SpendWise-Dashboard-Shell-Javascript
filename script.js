// SpendWise Budget Data

let monthlyBudget = 40000;
let totalExpenses = 12000;

// Collect budget information from the user
let userBudget = prompt("Enter your monthly budget:");
userBudget = Number(userBudget);

// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// Use the function
let remainingBalance = calculateRemainingBalance(userBudget, totalExpenses);

// Display results
console.log("=== SpendWise Budget Summary ===");
console.log("User Budget:", userBudget);
console.log("Total Expenses:", totalExpenses);
console.log("Remaining Balance:", remainingBalance);
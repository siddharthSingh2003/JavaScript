function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null; // Return null indicating failure
    } finally {
        console.log("Division operation completed."); // This will always execute
    }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed. 
                             
console.log(divide(12, 3)); // Output: 4
uhiuhihjnb
// Function to print a right-angled triangle with a specified height
function printRightAngleTriangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = '';

    // Add stars for the current row
    for (let j = 1; j <= i; j++) {
      row += '*';
    }

    // Print the current row
    console.log(row);
  }
}

// Call the function with the desired height (e.g., 5)
printRightAngleTriangle(5);

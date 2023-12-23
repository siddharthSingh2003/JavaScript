let n = 5; 
let output = "";

for(let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  output += spaces + stars + "\n";
}

console.log(output);
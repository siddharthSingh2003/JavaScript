let student = [3,9,18,3,28,6,17,9,3]; 

let duplicates = student.filter((item, index) => student.indexOf(item) !== index);

console.log(duplicates);
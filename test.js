const fs = require('fs');

fs.readFile('./dogs.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("file data:", jsonString);
})
console.log("hello world");

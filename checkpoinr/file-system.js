// file-system.js
const fs = require('fs');

// First: Create welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt has been created!');
    
    // Second: Read and display data from hello.txt
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Content of hello.txt:', data);
    });
});
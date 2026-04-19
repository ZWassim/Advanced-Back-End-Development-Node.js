// password-generator.js
const generator = require('generate-password');

function generateRandomPassword() {
    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        strict: true
    });
    
    console.log('Generated Password:', password);
    return password;
}

// Generate and display the password
generateRandomPassword();
// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using your email service
// IMPORTANT: Replace these with your actual email credentials
// For Gmail, you'll need to use an "App Password" not your regular password
const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
        user: 'your-email@gmail.com',     // Replace with your email
        pass: 'your-app-password'         // Replace with your app password
    }
});

// Email details
const mailOptions = {
    from: 'your-email@gmail.com',         // Sender address
    to: 'recipient-email@gmail.com',      // Replace with recipient email
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from my Node.js application.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
    }
});
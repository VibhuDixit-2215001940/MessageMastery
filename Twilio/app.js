const twilio = require("twilio");

// Twilio Credentials
const accountSid = ""; // Replace with your Account SID
const authToken = "";   // Replace with your Auth Token
const client = new twilio(accountSid, authToken);

// List of recipient phone numbers
const recipients = [
  "+917500211114"  // Replace with real numbers
  // "+918476969990"
];

// Message content
const messageBody = "Your Swipe2Clean garbage pickup is arriving in 15 minutes. Please keep waste ready."

// Send SMS to multiple recipients
recipients.forEach(number => {
  client.messages
    .create({
      body: messageBody,
      from: "+12184928918", // Replace with your Twilio number
      to: number
    })
    .then(message => console.log(`Message sent to ${number}! ID:`, message.sid))
    .catch(error => console.error(`Error sending to ${number}:`, error));
});

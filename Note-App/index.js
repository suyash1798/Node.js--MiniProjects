console.log("Starting App");

const os = require('os');
const fs = require('fs');

var username = os.userInfo().username;

fs.appendFileSync('Greetings.txt',`Hi ${username}`);
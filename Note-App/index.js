console.log("Starting App");

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js');

console.log(notes.add(4,5));

//var username = os.userInfo().username;
//
//fs.appendFileSync('Greetings.txt',`Hi ${username}`);
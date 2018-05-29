console.log("Starting App.js");

const os = require('os');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv.[0];
console.log('Command: ',command);
//console.log('Process', process.argv);
console.log('yargs',argv);

if(command === 'add'){
    notes.addNote(argv.title,argv.body);
//    notes.addNotes(argv.title,argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(arg.title);
}else if(command ==='remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized');
}
//console.log(notes.add(4,5));

//var username = os.userInfo().username;
//
//fs.appendFileSync('Greetings.txt',`Hi ${username}`);
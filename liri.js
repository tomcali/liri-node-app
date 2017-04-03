// assignment for week 10: liri-node-app

var fs = require('fs');
var request = require('request');  // request was installed previously

// we do an asynchronous read of the keys.js file and show its contents 
fs.readFile('./keys.js', 'utf8', function(error, data) {
  console.log()
  // if read is successful, we list the contents of the file
  // notice that the file has module.exports() for twitterKeys object
  if (!error) {
  	console.log('successful read of keys.js');
  	console.log('data from keys.js:')
    console.log(data);
    console.log(); // insert blank line between sections of log
  }
  // if read is unsuccessful, we report the error
  else {
  	console.log('unsuccessful attempt to read keys.js');
  	console.log('this is the error log:');
  	console.log(error);
  	console.log(); // insert blank line between sections of log
  }
});

// initialize global variable/object twitterKeys via require

var twitterKeys = require('./keys.js'); // a user-defined module
console.log(); // insert blank line between sections of log
console.log('verify that twitterKeys established as JavaScript object:');
console.log('typeof twitterKeys:', typeof twitterKeys);
console.log(twitterKeys);
console.log(); // insert blank line between sections of log

// assignment for week 10: liri-node-app

var fs = require('fs');
var request = require('request');  // request was installed previously

// asynchronous read of the keys.js file and show its contents 
fs.readFile('./utilities/keys.js', 'utf8', function(error, data) {
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

// asynchronous read of the getRandomInt.js file and show its contents 
fs.readFile('./utilities/random-integer.js', 'utf8', function(error, data) {
  console.log()
  // if read is successful, we list the contents of the file
  // notice that the file has module.exports() for this function/object
  if (!error) {
  	console.log('successful read of random-integer.js');
  	console.log('data from random-integer.js:')
    console.log(data);
    console.log(); // insert blank line between sections of log
  }
  // if read is unsuccessful, we report the error
  else {
  	console.log('unsuccessful attempt to read random-integer.js');
  	console.log('this is the error log:');
  	console.log(error);
  	console.log(); // insert blank line between sections of log
  }
});

// initialize global variable/object twitterKeys via require
var twitterKeys = require('./utilities/keys.js'); 
console.log(); // insert blank line between sections of log
console.log('verify that twitterKeys established as JavaScript object:');
console.log('typeof twitterKeys:', typeof twitterKeys);
console.log(twitterKeys);
console.log(); // insert blank line between sections of log

var getRandomInt = require('./utilities/random-integer.js'); 
console.log('verify that getRandomInt established as JavaScript object:');
console.log('typeof getRandomInt:', typeof getRandomInt);
console.log(getRandomInt);
console.log('verify that getRandomInt works for generating random integer');
console.log('generate random integer on [1,29]:', getRandomInt(1,29));
console.log('generate random integer on [501,599]:', getRandomInt(501,599));
console.log(); // insert blank line between sections of log

// test of set functions from utilities directory
// curiously, this works without module.exports statements in source file
var set = require('./utilities/set-functions-to-node.js'); 
var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
var setC = new Set([3, 4, 5, 6]);
console.log();
console.log('Testing set functions:');
console.log('setA:', setA);
console.log('setB:', setB);
console.log('setC:', setC);
console.log('isSuperset:', setA.isSuperset(setB));
console.log('setA.union(setC):', setA.union(setC));
console.log('setA.intersection(setC):', setA.intersection(setC));
console.log('setA.difference(setC):', setA.difference(setC));
console.log('setC.difference(setA):', setC.difference(setA));

// we are asked to make liri.js so that it accepts one of four 
// command line arguments, which we put into an array of strings
// and convert that array of strings into a set for testing
var validArgv = ['my-tweets', 'spotify-this-song', 
    'movie-this', 'do-what-it-says'];
var validArgvSet = new Set(validArgv);

var operation = process.argv[2];

if (!validArgvSet.has(operation)) {
	console.log();  // blank line
	console.log('Invalid command. node liri.js requires one of four commands:');
	console.log(validArgvSet);
}
else {
  switch(operation) {
    case 'my-tweets':
      console.log();  // blank line
      console.log('execute my-tweets');
      break;
    case 'spotify-this-song':
      console.log();  // blank line
      console.log('execute spotify-this-song');
      break;
    case 'movie-this':
      console.log();  // blank line
      console.log('execute movie-this');
      break;
    case 'do-what-it-says':
      console.log();  // blank line
      console.log('execute do-what-it-says');
      break;
  }; // end switch-block

} // end else-block processing of a valid command







// assignment for week 10: liri-node-app
// lots of comments concern console.log output used in development

var fs = require('fs');
var request = require('request');  // request was installed previously

// documentation for Twitter APIs at https://www.npmjs.com/package/node-twitter
var Twitter = require('node-twitter');  // access to Twitter APIs

// lodash for functional programming methods
var _ = require('lodash');  // used for manipulating arrays 

// spotify API documentation at https://www.npmjs.com/package/spotify
// application examples at https://developer.spotify.com/web-api/code-examples/
var spotify = require('spotify');

// asynchronous read of the keys.js file and show its contents 
fs.readFile('./utilities/keys.js', 'utf8', function(error, data) {
  // console.log()
  // if read is successful, we list the contents of the file
  // notice that the file has module.exports() for twitterKeys object
  if (!error) {
  	// console.log('successful read of keys.js');
  	// console.log('data from keys.js:')
    // console.log(data);
    // console.log(); // insert blank line between sections of log
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
  // console.log()
  // if read is successful, we list the contents of the file
  // notice that the file has module.exports() for this function/object
  if (!error) {
  	// console.log('successful read of random-integer.js');
  	// console.log('data from random-integer.js:')
    // console.log(data);
    // console.log(); // insert blank line between sections of log
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
// console.log(); // insert blank line between sections of log
// console.log('verify that twitterKeys established as JavaScript object:');
// console.log('typeof twitterKeys:', typeof twitterKeys);
// console.log(twitterKeys);
// console.log(); // insert blank line between sections of log

var getRandomInt = require('./utilities/random-integer.js'); 
// console.log('verify that getRandomInt established as JavaScript object:');
// console.log('typeof getRandomInt:', typeof getRandomInt);
// console.log(getRandomInt);
// console.log('verify that getRandomInt works for generating random integer');
// console.log('generate random integer on [1,29]:', getRandomInt(1,29));
// console.log('generate random integer on [501,599]:', getRandomInt(501,599));
// console.log(); // insert blank line between sections of log

// test of set functions from utilities directory
// curiously, this works without module.exports statements in source file
var set = require('./utilities/set-functions-to-node.js'); 
var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
var setC = new Set([3, 4, 5, 6]);
// console.log();
// console.log('Testing set functions:');
// console.log('setA:', setA);
// console.log('setB:', setB);
// console.log('setC:', setC);
// console.log('isSuperset:', setA.isSuperset(setB));
// console.log('setA.union(setC):', setA.union(setC));
// console.log('setA.intersection(setC):', setA.intersection(setC));
// console.log('setA.difference(setC):', setA.difference(setC));
// console.log('setC.difference(setA):', setC.difference(setA));

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
      // console.log();  // blank line
      // console.log('execute my-tweets');
      // console.log('twitterKeys:', twitterKeys);
      // console.log('consumer_key:', twitterKeys.twitterKeys.consumer_key);
      // console.log('consumer_key:', twitterKeys.twitterKeys.consumer_secret);
      // console.log('consumer_key:', twitterKeys.twitterKeys.access_token_key);
      // console.log('consumer_key:', twitterKeys.twitterKeys.access_token_secret);
      var twitterRestClient = new Twitter.RestClient(
          twitterKeys.twitterKeys.consumer_key,
          twitterKeys.twitterKeys.consumer_secret,
          twitterKeys.twitterKeys.access_token_key,
          twitterKeys.twitterKeys.access_token_secret
      );
      twitterRestClient.statusesHomeTimeline({}, function(error, result) {
        if (error) {
          console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
        }
        if (result) {
          // console.log(result); // this would provide the entire set of tweets
          console.log();  // blank line
          // console.log('total number of tweets retrieved:', result.length);
          // console.log('examine structure of last tweet:', result.slice(-1));
          var twentyTweets = _.takeRight(result, 20); // last twenty tweets a la lodash
          // console.log('check length of twentyTweets', twentyTweets.length) 
          // build array of JSON objects with create_at and text values
          tweetsToDisplay = []; // declares array 
          console.log('Last twenty tweets and when they were created:')
          for (var i=0; i<twentyTweets.length; i++) {
            tweetsToDisplay.push({'created_at': twentyTweets[i].created_at,
              'text': twentyTweets[i].text});
          }
          console.log(tweetsToDisplay);
          console.log();  // blank line
        }
      });
      break;

    case 'spotify-this-song':
      // processing node liri.js spotify-this-song '<song name here>'
      console.log();  // blank line
      console.log('execute spotify-this-song');
      console.log('process.argv.length:', process.argv.length);
      if (process.argv.length === 4) {
        var songTitle = process.argv[3];
      }
      else {
      	var songTitle = 'The Sign';
      }  
      spotify.search({ type: 'track', query: songTitle }, function(err, data) {
        if ( err ) {
          console.log('Spotify error occurred: ' + err);
          return;
        }
        else {
          console.log('spotify data received:', data);
        }
      });









      break;

    case 'movie-this':
      console.log();  // blank line
      console.log('execute movie-this');
      console.log('process.argv.length:', process.argv.length);
      if (process.argv.length === 4) {
        var movieTitle = process.argv[3];
      }
      else {
      	var movieTitle = 'Mr. Nobody';
      }  
      // construct the query string by eliminating punctuation 
      // and replacing spaces with plus sign and converting to lowercase
      var movieTitleQuery = movieTitle.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s{2,}/g, " ").replace(/\s+/g, '+').toLowerCase();

      request("http://www.omdbapi.com/?t=" + movieTitleQuery + "&y=&plot=short&r=json", 
     	function(error, response, body) {

         // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

          // Parse the body of the site and recover just the imdbRating
          // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
          console.log();
          console.log('Complete JSON information for movieTitle:');
          console.log(JSON.parse(body));
          console.log();
          console.log('Title of the movie:', JSON.parse(body).Title);
          console.log('Year the movie came out:', JSON.parse(body).Year);
          console.log('IMDB Rating of the movie:', JSON.parse(body).imdbRating);
          console.log('Country where the movie was produced:', JSON.parse(body).Country);
          console.log('Language of the movie:', JSON.parse(body).Language);
          console.log('Plot of the movie:', JSON.parse(body).Plot);
          console.log('Actors in the movie:', JSON.parse(body).Actors);
          console.log('Rating information:', JSON.parse(body).Ratings); // includes Rotten Tomatoes
          console.log('Rotten Tomatoes URL:', 'https://www.rottentomatoes.com/');
        }
      });
      break;

    case 'do-what-it-says':
      console.log();  // blank line
      console.log('execute do-what-it-says');
      break;
  }; // end switch-block

} // end else-block processing of a valid command








 






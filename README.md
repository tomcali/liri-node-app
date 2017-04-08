# Week 10 Assignment: liri-node-app

## Overview
This assignment concerns node.js and its use as a tool for interacting with web APIs and the local file system. It sets the stage for later work with node.js as a database and web server. 

I work through the instructions for the assignment and explore few additional node.js features and packages in the process. By far my favorite assignment of the term so far. 

## Viewing the Websites

The GitHub repository shows the work on this assignment.

## Requirements
The requirements for this assignment may be found in the file homework_instructions.md, which is enclosed in this repository.

## Technologies Used

* Git/GitHub
* node/npm with initial npm init to set up package.json
* Twitter API via node twitter
* Spotify for songs
* OMDb for movies
* A taste of lodash (still wondering whether to employ lodash or underscore in my applications
* Switch statement instead of the if, else if, and else pattern. Recently, however, I have learned that method-lookup may be a better approach. See Eric Elliott's (2014) Programming JavaScript Applications for the rationale behind using a method-lookup pattern. One of the big problems with the switch statement is the requirement for the break statement at the end of each case. Missing the break does not throw a syntax error, but it may well cause problems during execution. I wish I had read Elliott's book before beginning this assignment. Next time I am tempted to use either if-else or switch, I think I will try the method-lookup alternative.
* Set data structure to test legitimacy of the method requests. Here again, I may be able to use method-lookup as replacement for both the switch statement and the set data structure and validation scheme used here.


## Coding Process 
* We start with GitHub, setting up the repository liri-node-app 
* Clone the repository and set up the files required for this assignment, including .gitignore, keys.js, random.txt, and liri.js 
* npm init to set up package.json and added packages/modules with --save paramter as in 'npm install request --save' and 'npm install node-twitter --save'
* Obtained Twitter credentials
* Utilize appropriate node packages to complete the tasks required for the assignemnt. Found that the song mentioned in the spec did not function properly in spotify (not sure why), so I moved to Heart of Stone by Blondie, one of my favorites.
* Set up utilities directory to accommodate user-defined modules... anticipating future node app development work, included set operations as part of this utilities directory (not part of the assignment, but something that will help in  future projects). Utilized index.js approach to this utilities directory.
* Wrote code needed to read the keys.js file, which set up the twitterKeys object with the appropriate authorization codes for accessing twitter APIs. This work utilized the fs module from the standard node environment and require. Again, we are working with keys.js under the utilities directory. Random integer and set functions were also brought in through require.
* process.argv() is used to take in command-line arguments, which are subsequently checked for valid values.
* Set up the control flow for executing various liri methods, including twitter, spotify, OMDB, and random.
* Ran a few test of the various functions.
* Added logging to an external text file log.txt as an option. The logToFile Boolean toggle controls this option.  

 

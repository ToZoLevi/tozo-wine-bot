"use strict";
// index.js
const twitter_credentials = require('./twitter-api-credentials');
const Twitter = require('twitter');
 
// Use exported secret credentials.
let twitter = new Twitter(twitter_credentials);

twitter.post(
    'statuses/update',
    {
        status: 'The 10yo Fonseca Tawny #port loveit @FonsecaPort'
    },
    function(error, tweet, response) {
        if(error) {
            console.log(error);
            throw error;
        }
        console.log('---- TWEET ----');
        console.log(tweet);
        console.log('---- RESPONSE ----');
        console.log(response);
    }
);
 

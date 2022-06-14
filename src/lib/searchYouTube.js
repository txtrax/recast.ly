import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
/*
Use jQuery to send a GET request to the search endpoint.
 Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
 Accept an q string to search for
 Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
Note: the API also accepts a query param of youtube_api_key with your youtube api key to get additional searches once our key reaches its daily limit.
*/
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q: query}, // what we're sending
    success: callback, // has parameters (data)
  });
};

export default searchYouTube;
const request = require("request");

const url =
  "https://api.darksky.net/forecast/6d0815ed5d56781f49a59128519f4714/37.8267,-122.4233";
request({ url: url, json: true }, (error, response) => {
  //   console.log(
  //     "It is currently ",
  //     response.body.currently.temperature,
  //     " degrees out . There is a ",
  //     response.body.currently.precipProbability,
  //     "chances of rain"
  //   );
});
//Geocoding

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiYWJoaTA0MTAiLCJhIjoiY2p5cXFwenV3MDFwZjNibjJtODZha2FqMyJ9.lYXeofeFQnqZi8IhUgac9A&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  console.log(
    "The latitude and Longitude of Los Angeles is : ",
    // response.features[0].center[0]
    response.body.features[0].center[0],
    "and ",
    response.body.features[0].center[1],
    "respectively"
  );
});

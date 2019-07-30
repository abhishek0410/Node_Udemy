const request = require("request");

const url =
  "https://api.darksky.net/forecast/6d0815ed5d56781f49a59128519f4714/37.8267,-122.4233";
request({ url: url, json: true }, (error, response) => {
  console.log(
    "It is currently ",
    response.body.currently.temperature,
    " degrees out . There is a ",
    response.body.currently.precipProbability,
    "chances of rain"
  );
});

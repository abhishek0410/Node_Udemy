const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiYWJoaTA0MTAiLCJhIjoiY2p5cXFwenV3MDFwZjNibjJtODZha2FqMyJ9.lYXeofeFQnqZi8IhUgac9A&limit=1";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services !", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find locaation. Try search ", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1]
      });
    }
  });
};

module.exports = geocode;

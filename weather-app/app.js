const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

//Getting the geocode information

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, data) => {
    // console.log("Data", data);
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      }
      console.log(data.location);
      console.log("Data ", forecastData);
    });
  });
}

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Getting the geocode information
geocode("Boston", (error, data) => {
  // console.log("Data", data);
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      console.log(error);
    }
    console.log(data.location);
    console.log("Data ", forecastData);
  });
});

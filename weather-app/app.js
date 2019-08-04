const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Getting the geocode information
// geocode("Boston", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

//Getting the forecast information
forecast(-75.7088, 44.1545, (data, error) => {
  console.log("Error ", error);
  console.log("Data ", data);
});

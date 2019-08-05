const express = require("express");
const app = express();

//Sending HTML
app.get("/", (req, res) => {
  res.send("<h1>Weather</h1>");
});

//Sending JSON
app.get("/help", (req, res) => {
  res.send(
    {
      name: "Andrew"
    },
    {
      name: "Sarah"
    }
  );
});

//Sendign HTML
app.get("/about", (req, res) => {
  res.send("<h1>Everything About the page here</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia"
  });
});
//app.com
//app.com/help
//app.com/about

app.listen(8000, () => {
  console.log("Sever is running on port 8000");
});

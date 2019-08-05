const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Andrew Mead"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Aboit me ",
    name: "Abhishek"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Messege",
    messege: "Keep faith in god , everything will be fine"
  });
});
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

// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API_KEY = "bc99a0c016c5ed235998a796523499a8";
const request = new XMLHttpRequest();
let data = [];

//Calling the external API which does not return a Promise.

request.addEventListener("readystatechange", e => {
  // debugger;
  if (e.target.readyState === 4) {
    data = e.target.responseText;
    console.log("data is :", data);
  }
  console.log("This is after the if statement");
});

request.open(
  "GET",
  `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
);

request.send();

// request.addEventListener("readystatechange", e => {
//   if (e.target.readyState === 4) {
//     const data = JSON.parse(e.target.responseText);
//     console.log(data); // Will print a new random puzzle
//   }
// });
// request.open("GET", "http://puzzle.mead.io/puzzle");
// request.send();

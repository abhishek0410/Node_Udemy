//Illustrating the case why

const API_KEY = "bc99a0c016c5ed235998a796523499a8";

const request = new XMLHttpRequest();
let data = [];

request.addEventListener("readystatechange", e => {
  // debugger;

  //Print the data straight Away , even if it is not ready :
  console.log("event is ", e.target.readyState);
  console.log("This is executed", e.target.responseText);

  //   if (e.target.readyState === 4) {
  //     data = e.target.responseText;
  //     console.log("data is :", data);
  //   }
  //   console.log("This is after the if statement");
});

request.open(
  "GET",
  `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
);

request.send();

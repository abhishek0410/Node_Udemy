console.log("Client side java script is loaded ");

fetch("http://puzzle.mead.io/puzzle").then(response => {
  response.json().then(data => {
    console.log(data);
  });
});

fetch("http://localhost:8000/weather?address=toronto").then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

const weathreForm = document.querySelector("form");

weathreForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log("testing");
});

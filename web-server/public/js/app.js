console.log("Client side java script is loaded ");

const weathreForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");

const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From Java Scipt";

weathreForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading....";
  n = messageTwo.textContent = "";

  fetch("http://localhost:8000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});

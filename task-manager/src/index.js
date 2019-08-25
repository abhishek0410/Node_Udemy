const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.post("/", (req, res) => {
  console.log("Hello world");
});

// app.post("/users", (req, res) => {
//   res.send(req.body);
// });

app.post("/users", (req, res) => {
  // res.send(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(() => {
      console.log("Error in attempt to save the User ");
    });
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

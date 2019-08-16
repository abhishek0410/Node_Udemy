const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// const User = mongoose.model("User", {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

// const me = new User({
//   name: "Andrew",
//   age: 27
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error !", error);
//   });

const Task = mongoose.model("task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task1 = new Task({
  description: "What is the edge of universe",
  completed: true
});
task1
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error is ", error);
  });

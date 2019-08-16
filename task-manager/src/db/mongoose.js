const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is required");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (valuetoLoerCase().inludes("password")) {
        throw new Error("Password must not contain the phrase password");
      }
    }
  }
});

// const me = new User({
//   name: "delhi2",
//   email: "delhi2@mead.io",
//   password: "  re32"
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
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task1 = new Task({
  description: "toone mere jana"
});
task1
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error is ", error);
  });

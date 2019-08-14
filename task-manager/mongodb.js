const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Abhi",
    //     age: 27
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user ");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert Document");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //Creating a task collection in the task-manager database
    db.collection("task").insertMany(
      [
        {
          description: "Clean your desk ",
          completed: false
        },
        {
          description: "Greatness lies within",
          completed: true
        },
        {
          description: "By gones are bygones",
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("The data could");
        }
        console.log(result.ops);
      }
    );
  }
);

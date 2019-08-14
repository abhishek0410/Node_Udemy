const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

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

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5d53a3064005761714310d35") },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    //Finding the document from the task collection
    db.collection("task").findOne(
      { _id: new ObjectID("5d53a4de181ae52f68e7aed2") },
      (error, result) => {
        if (error) {
          return console.log("There was an error fetching the data");
        }
        console.log(result);
      }
    );

    db.collection("task")
      .find({ completed: false })
      .toArray((error, users) => {
        console.log(users);
      });
  }
);

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

    // db.collection("users")
    //   .deleteMany({
    //     age: 27
    //   })
    //   .then(result => {
    //     console.log("Result is ", result);
    //   })
    //   .catch(error => {
    //     console.log("Error is ", error);
    //   });

    db.collection("task")
      .deleteOne({
        description: "Clean your desk "
      })
      .then(result => {
        console.log("Result is ", result);
      })
      .catch(error => {
        console.log("Error is ", error);
      });
  }
);

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
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5d53a3064005761714310d37")
    //     },
    //     {
    //       $set: {
    //         name: "New Changed name"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log("Promise returned the following ", result);
    //   })
    //   .catch(error => {
    //     console.log("Promise not fullfilled , we have got an error");
    //   });

    //Challenge Task :
    db.collection("task")
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log("The results are  ", result);
      })
      .catch(error => {
        console.log("The error is ", error);
      });
  }
);

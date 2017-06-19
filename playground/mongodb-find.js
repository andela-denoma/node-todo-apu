// const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MondoDB server");
  }
  console.log("Connected to MongoDB server");

  // db
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("58ef655216fabefd18b8eedb") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to get todos", err);
  //     }
  //   );

  db.collection("Todos").find().count().then(
    count => {
      console.log(`count: ${count}`);
    },
    err => {
      console.log("Unable to get todos", err);
    }
  );

  // db.close();
});
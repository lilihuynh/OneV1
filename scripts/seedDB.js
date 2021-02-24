const mongoose = require("mongoose");
const db = require("../models");
// const { post } = require("../routes");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/GamersInfo"
);
// const userArray [userdb,postdb]

const userdb = [
  {
    username: "apple",
    password: "1234",
    email: "kndjknwek12",
    currentPoint: "50"
  },
  {
    username: "pear",
    password: "4321",
    email: "hjbjh21v3",
    currentPoint: "50"
  },
  {
    username: "banana",
    password: "5678",
    email: "2bk1b2jkb",
    currentPoint: "50"
  },
  {
    username: "orange",
    password: "8765",
    email: "1kjb2h3b1j2v3",
    currentPoint: "50"
  }
];

const postdb = [
  {
    title: "inqwoinqd",
    // author: "1e12eqw",
    body: "12deceqw",
    bettingPoint: "12"
  },
  {
    title: "qc3ec",
    // author: "3ec31c",
    body: "c3c13c3",
    bettingPoint: "12"
  },
  {
    title: "qc3ec",
    // author: "3ec31c",
    body: "c3c13c3",
    bettingPoint: "12"
  },
  {
    title: "qc3ec",
    // author: "3ec31c",
    body: "c3c13c3",
    bettingPoint: "12"
  }
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postdb))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userdb))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
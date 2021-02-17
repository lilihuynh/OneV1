const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //get all user
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //retrieve specific user
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("post", "_id title battleDate body bettingPoint")  //other things need to be populate
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //register new user ???
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};


// app.get("/user", (req, res) => {
//   db.User.find({})
//   .sort({ date: -1 })
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.status(422).json(err);
//     });
// });

// app.get("/populateduser", (req, res) => {

//   db.User.find({})
//     .populate("notes")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.status(422).json(err);
//     });
// });
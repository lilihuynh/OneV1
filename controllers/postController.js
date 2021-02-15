const db = require("../models");

module.exports = {
    //retrieve all posts
    findAll: function (req, res) {
        db.Post
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //retrieve specific post by Id
    findById: function (req, res) {
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //create post
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

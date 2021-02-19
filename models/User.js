const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  currentPoint: {
    type: Number,
  },

  post:[{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }],

});

const User = mongoose.model("User", UserSchema);

module.exports = User;

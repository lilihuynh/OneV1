const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;


// Post.js
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  battleDate:{
    type: Date,
    default: Date.now
  },

  body:{
    type: String,
    required: true
  },

  bettingPoint: {
    type: Number,
    required: true
  },

//relate to user who post this post
  _author:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

})

const Posts = mongoose.model("Posts", PostSchema);
module.exports = Posts;
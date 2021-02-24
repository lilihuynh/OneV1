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
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  
  body: {
    type: String,
    required: true
  },

  screenshot:{
    type: String,
    default: "none"

  },

  bettingPoint: {
    type: Number,
    required: true
  },

  //relate to user who post this post
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  //the user who accept the challenge

  acceptedBy:[
    {type: Schema.Types.ObjectId,
    ref: "User",
    }

  ]

})

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
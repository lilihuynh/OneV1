import axios from "axios";

export default {
  // Gets all books
  getPosts: function() {
<<<<<<< HEAD
    return axios.get("/api/books");
=======
    return axios.get("/api/posts");
>>>>>>> Develop
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/posts" + id);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts" + id);
  },

  updatePost: function (id) {
    return axios.put("/api/posts" + id);
  },

  // Saves a book to the database
  savePost: function(postData) {
    return axios.post("/api", postData);
  }
};

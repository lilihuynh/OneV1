const router = require("express").Router();
const postController = require("../../controllers/postController");


router.route("/posts")
  .get(postController.findAll)
  .post(postController.create);


router
  .route("/:id")
  .get(postController.findById)
  .delete(postController.remove)
  .put(postController.accept)

// //get all post of a specific user
// router
//   .route("/bets")
//   .get(postController.findByUserId);


//someone accept the challenge

module.exports = router;
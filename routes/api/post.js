const router = require("express").Router();
const postController = require("../../controllers/postController");


router.route("/post/")
  .get(postController.findAll)
  .post(postController.create);


router
  .route("/post/:id")
  .get(postController.findById)
  .delete(postController.remove);

  //get all post of a specific user
  router
  .route("/post/mypost")
  .get(postController.findByUserId);


//someone accept the challenge
router
.route("/post/accept")
.put(postController.accept)

module.exports = router;
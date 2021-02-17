const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")

  .post(userController.create);

router.route("/users")
  .get(userController.findAll)

router
  .route("/:id")
  .get(userController.findById);

module.exports = router;
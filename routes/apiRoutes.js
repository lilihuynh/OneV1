const router = require("express").Router();
const db = require("../models");
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");


router.get("/posts", postController.findAll);
router.post("/posts",postController.create);

router.get("/:id",postController.findById);
router.delete("/:id",postController.remove);
router.put("/:id",postController.accept);


router.post("/",userController.create);
router.get("/users",userController.findAll)
router.get("/:id",userController.findById);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;




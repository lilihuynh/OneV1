const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
// const authRoutes =require("./auth")
// router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/user", userRoutes);
module.exports = router;

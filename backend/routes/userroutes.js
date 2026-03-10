const {userSignUp,userLogin} = require("../controllers/usercontroller");
const express = require("express");
const userRouter = express.Router();
const upload = require("../middlewares/fileUpload");

userRouter
.post("/signup", upload.single('profilePicture'), (userSignUp))
.post("/login",(userLogin))

module.exports = userRouter;
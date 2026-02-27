const {userSignUp,userLogin} = require("../controllers/usercontroller");
const express = require("express");
const userRouter = express.Router();

userRouter
.post("/signup",(userSignUp))
.post("/login",(userLogin))

module.exports = userRouter;
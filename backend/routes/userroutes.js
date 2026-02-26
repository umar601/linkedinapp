const {userSignUp} = require("../controllers/usercontroller");
const express = require("express");
const userRouter = express.Router();

userRouter
.post("/",(userSignUp));

module.exports = userRouter;
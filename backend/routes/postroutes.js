const {addPost} = require("../controllers/postcontroller");
const express = require("express");
const postRouter = express.Router();


postRouter
.post("/post",addPost)

module.exports = postRouter;
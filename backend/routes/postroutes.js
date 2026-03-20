const {addPost,deletePost,editPost,getAllPosts} = require("../controllers/postcontroller");
const express = require("express");
const postRouter = express.Router();
const jwt = require("jsonwebtoken");


function verifyToken(req, res, next) {

    // const authHeader = req.headers.authorization;
    
    // console.log(req.headers)

    // console.log(req.headers.authorization)

    // if (!authHeader) {
    //     return res.status(401).send("Unauthorized: No token provided");
    // }

    // const token = authHeader.split(" ")[1];
    // console.log(token)

    // console.log(req.cookies.token)

    if(!req.cookies.token||req.cookies.token=="undefined"){

        return res.status(401).send("Unauthorized: No token provided");
    }

    try {
        // console.log(req.cookies.token)
        const decoded = jwt.verify(req.cookies.token, "secretkey");

        // console.log("decoded",decoded)

        req.user = decoded;
        next();  

    } catch (err) {
        return res.status(401).send("Invalid token");
    }
}


postRouter
.route("/post")
.post(verifyToken,addPost)
.get(getAllPosts)

postRouter
.route("/post/:id")
.delete(verifyToken,deletePost)
.patch(verifyToken,editPost);


module.exports = postRouter;
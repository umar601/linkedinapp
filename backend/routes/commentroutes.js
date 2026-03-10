const express = require("express");
const commentRouter = express.Router();
const {addComment,deletComment,editComment} = require("../controllers/commentController");
const jwt = require("jsonwebtoken")

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
        // console.log("tyr block")
        const decoded = jwt.verify(req.cookies.token, "secretkey");

        // console.log("decoded",decoded)

        req.user = decoded;
        next();  

    } catch (err) {
        return res.status(401).send("Invalid token",req.cookies.token);
    }
}

commentRouter
.post("/comment/:id",verifyToken,addComment)
.delete("/comment/:id",verifyToken,deletComment)
.patch("/comment/:id",verifyToken,editComment)

module.exports = commentRouter
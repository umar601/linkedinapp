const {addPost} = require("../controllers/postcontroller");
const express = require("express");
const postRouter = express.Router();

async function verifyToken(req,res,next){

    try{

        if(!req.headers.authorization){
            return res.status(401).send("Unauthorized: No token provided");
        }
        const token = req.headers.authorization.string().split(" ")[1];
        const decoded = jwt.verify(token,"secretkey");
        req.user = decoded;
        next();

    }
    catch(err){
        next(err);
    }

}


postRouter
.post("/post",addPost)

module.exports = postRouter;
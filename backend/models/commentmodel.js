const mongoose = require("mongoose");
const user = require("./usermodel");
const post = require("./postmodel");

const commentSchema = new mongoose.Schema(
    
    {
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:post,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:user,
            required:true
        }


})

const comment = mongoose.model("comment",commentSchema)

module.exports = comment;
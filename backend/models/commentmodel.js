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
        },
        content:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        likes:{
            type:Number,
            Defaule:0

        }


})

const comment = mongoose.model("comment",commentSchema)

module.exports = comment;
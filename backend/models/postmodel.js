const mongoose = require("mongoose");


const postSehema = new mongoose.Schema(
    
    {
        content:{
            type:String,
            required:true
        },
        likes:{
            type:Number,
            default:0
        },
        shares:{
            type:Number,
            defualt:0
        },
        reposts:{
            type:Number,
            default:0
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"comment"
            }
        ]


})

const post = mongoose.model("post",postSehema)

module.exports = post;
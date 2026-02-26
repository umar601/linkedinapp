const mongoose = require("mongoose");

const postSehema = new mongoose.Schema(
    
    {
        content:{
            type:String,
            required:true
        },
        likes:{
            type:Number,
            required:true,
            default:0
        },
        shares:{
            type:Number,
            required:true,
            defualt:0
        },
        reposts:{
            type:Number,
            required:true,
            default:0
        }


})

const post = mongoose.model("post",postSehema)

module.exports = post;
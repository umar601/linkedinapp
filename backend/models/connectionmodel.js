const mongoose = require("mongoose");
const user = require("./usermodel");
const post = require("./postmodel");

const connectionSchema = new mongoose.Schema(
    
    {
        sendBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:user,
            required:true
        },
        recievedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:user,
            required:true
        },
        status:{
            type:Boolean,
            default:null,
            required:true
        }


})

const connection = mongoose.model("connection",connectionSchema)

module.exports = connection;
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        posts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"post"
            }                 
            
        ],
        comments:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"comment"

            }
        ],
        connections:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"connection"
            }
        ],
        profilePicture:{
            type:String,
            default:"https://res.cloudinary.com/dlqj8h5u9/image/upload/v1700000000/linkenidapp/default_profile_picture.png"
        }
    }
)

const user = mongoose.model("user",userSchema);

module.exports = user;
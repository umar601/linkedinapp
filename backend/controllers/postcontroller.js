const post = require("../models/postmodel");
const user = require("../models/usermodel");

async function addPost(req,res){

    let {content} = req.body;
    
    try{
    let newpost = await post.insertOne({content:content,createdBy:req.user});
    //first we have to finc login user then push it into his data
    
    // let userPostUpdate=user.posts.push(newpost);
    // await userPostUpdate.save();
    
    console.log(req.user)
    res.send("post saved successfully")
    }catch(err){
        console.log(err)
        res.status(500).send("not saved something wrong occur");
    }

}

module.exports = {addPost}
const comment = require("../models/commentmodel");
const post = require("../models/postmodel")
const user = require("../models/usermodel")

async function addComment(req,res) {
    let {content} = req.body;
    let {id} = req.params;

    try{
    let postToAddComment = await post.findById(id);
    let userAddedComment = await user.findOne({username:req.user.username});

    if(!postToAddComment||!userAddedComment){
        res.send("post or user not found")
    }

    console.log(postToAddComment)
    console.log(userAddedComment)

    let addedComment = await comment.insertOne(
        {
            content:content,
            user:userAddedComment,
            post:postToAddComment,
            likes:0,
            
        }

    )
    userAddedComment.comments.push(addedComment)
    postToAddComment.comments.push(addedComment)
    await postToAddComment.save()
    await userAddedComment.save()

    res.send("comment posted Succesfully");


}catch(err){
    console.log(err);
    res.status(500).send(err);
}
    
}

async function deletComment (req,res){

    let {id} = req.params;

    try{

    let commenstToDelete = await comment.findByIdAndDelete(id);

    let userComment = await user.findOne({username:req.user.username});

    let postToupdate = await post.findOne({_id:commenstToDelete.post})

    await user.updateOne(

        {_id:userComment.id},
        {$pull:{comments:id}}
    )

    await post.updateOne(
        {_id:postToupdate.id},
        {$pull:{comments:id}}
    )

    res.send("working")
    
    }catch(err){
        res.send(500).send("error in delete");
    }

    // console.log(commentToDelete)
    // console.log("user",userComment)

}

async function editComment(req,res){

    let {id} = req.params;
    let {content} = req.body;

    try{

    await comment.findByIdAndUpdate(id,
        {content:content}

    )

    res.send("updated successfully")

    }catch(err){
        res.status(500).send("error in updating")
    }   

    
}

module.exports = {addComment,deletComment,editComment}
const post = require("../models/postmodel");
const user = require("../models/usermodel");
// async function verifyToken(req,res,next){

//     try{

//         const token = req.headers.authorization.split(" ")[1];
//         const decoded = jwt.verify(token,"secretkey");
//         req.user = decoded;
//         next();

//     }
//     catch(err){
//         next(err);
//     }

// }

async function addPost(req,res){

    let {content} = req.body;
    
    try{

    let userCreated = await user.findOne({username:req.user.username})
    let newpost = await post.insertOne({content:content,createdBy:userCreated});

    // console.log(req.user)
    //first we have to find login user then push it into his data
    // console.log(req.user.id)

    // console.log(req.user)

    // console.log("id",req.user._id)

    let userToUpdate = await user.findOne({username:req.user.username})

    // console.log("user",userToUpdate)

    userToUpdate.posts.push(newpost);

    await userToUpdate.save()

    console.log("post saved in user successfulyy")

    
    // let userPostUpdate=user.posts.push(newpost);
    // await userPostUpdate.save();
    
    // console.log(req.user)
    res.send("post saved successfully")
    }catch(err){
        console.log(err)
        res.status(500).send("not saved something wrong occur");
    }

}

async function deletePost(req,res){

    let {id} = req.params;

    try{

    let postToDelete = await post.findById(id);

    if(!postToDelete||postToDelete=="undefined"){
        
        return res.send("post already deleted or not found")
    }

    //deleteing it from the user also

    // console.log(postToDelete.createdBy)

    await user.updateOne(
    
        {_id:postToDelete.createdBy},
        {$pull:{posts:id}}
    
    )

    await post.deleteOne({_id:id})


    // console.log("userupdated usecessfully")


    res.send("post deleted successfuly")

    }catch(err){

        console.log("error in deleteing ",err);
    }


}

//we make a get request for edit and below request is for update 

async function editPost(req,res){

    let {id} = req.params;

    let {content} = req.body;

    try{

    await post.findByIdAndUpdate(id,{content:content})

    console.log("post updaed successfull");

    res.send("updated")

    }catch(err){

        res.status(500).error("error in update")
    }

}

async function getAllPosts(req,res){

    try{
    let fetchedPosts = await post.find({});

    // console.log(fetchedPosts)
    res.json(fetchedPosts)
    }catch(err){
        console.log(err)
        res.status(500).send("error in fetching postss")
    }
}

module.exports = {addPost,deletePost,editPost,getAllPosts}
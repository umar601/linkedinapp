const connection = require("../models/connectionmodel");
const user = require("../models/usermodel");

async function sendConnetionRequest(req,res){

    let {senderId,reciverId} = req.params;

    try{

    let sender = await user.findById(senderId);
    let reciever = await user.findById(reciverId);

    let checkingAlreadyRequest = await connection.findOne(
        {
            sendBy:senderId,
            recievedBy:reciverId
        }
    )

    if(checkingAlreadyRequest){
        return res.send("alrady in request")
    }

    await connection.insertOne(
        {
            sendBy:sender,
            recievedBy:reciever,
            status:null
        }
    )

    res.send("req send succesfully")

    }catch(err){
        res.status(500).send("error is sending")
    }

}

async function acceptRequest (req,res){

     let {senderId,reciverId} = req.params;

    let sender = await user.findById(senderId);
    let reciever = await user.findById(reciverId);

    try{

        sender.connections.push(reciever)
        reciever.connections.push(sender)
        await sender.save();
        await reciever.save();

    res.send("req accepted succesfully")

    }catch(err){
        res.status(500).send("error is accepting")
    }

}

async function deleteRequest(req,res) {

    let {senderId,reciverId} = req.params;

    // console.log("working")

    // try {

    let requestToDelete = await connection.findOneAndDelete(

        {sendBy:senderId},
        {recievedBy:reciverId}
    )
    if(!requestToDelete){
        return res.send("reuest not found")
    }
    res.send("reuest deleted successfully ")

// }catch(err){

//     console.log(err)

//     res.send(500).send("error in deleteing the requestin")
// }
    
}


module.exports = {sendConnetionRequest,acceptRequest,deleteRequest};
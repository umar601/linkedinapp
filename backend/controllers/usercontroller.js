const user = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function userSignUp(req,res){

    let {username,password}=req.body;

    let checkUser = await user.findOne({username:username})

    if(!checkUser||checkUser==undefined){

    const hashedPassword = await bcrypt.hash(password,10);

    let newUser = await user.insertOne({username:username,password:hashedPassword});

    // console.log(newUser)

    const token = jwt.sign(
    {
        id:newUser.insertedId,
        username:username
    },
    "secretkey",
    { expiresIn: "1h" }
)
    res.cookie("token",token,
        {
        expiresIn:24*60*60*60,
        httpOnly:true
        }
    )

    // console.log(username,password)
    res.json(token)
    }
    else{
        
        res.send("user already exist")
    }


}

async function userLogin(req,res){

    // console.log(req.body.password)
    
   let {username,password} = req.body;

   try{
   let findUser = await user.findOne({username:username});


   if(findUser){
    
    let isValid = await bcrypt.compare(password,findUser.password);
    if(!isValid){
        return res.send("password is wrong");
    }


    // console.log(req.user)

    const token=jwt.sign(
    {
        id:findUser._id,
        username:findUser.username
    },
    "secretkey",
    { expiresIn: "1h" }
    )

    res.cookie("token",token,
        {
        expiresIn:24*60*60*60,
        httpOnly:true
        }
    )

    
    res.send(token)

   }
   else{
    res.send("user not found")
   }
    }catch(err){
        console.log(err)
        res.send("found error in fetching")
    }



}

module.exports = {userSignUp,userLogin}
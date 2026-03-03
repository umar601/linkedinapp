const user = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function userSignUp(req,res){

    let {username,password}=req.body;

    let checkUser = await user.findOne({username:username})

    if(!checkUser||checkUser==undefined){

    const hashedPassword = await bcrypt.hash(password,10);

    let newUser = await user.insertOne({username:username,password:hashedPassword});

    console.log(newUser)

    req.user = newUser;

    const token = jwt.sign(
    {
        username:username,
        password:password
    },
    "secretkey",
    { expiresIn: "1h" }
)

    // console.log(username,password)
    res.json(token)
    }
    else{
        res.send("user already exist")
    }


}

async function userLogin(req,res){
    
   let {username,password} = req.body;

   try{
   let findUser = await user.findOne({username:username});


   if(findUser){
    
    let isValid = await bcrypt.compare(password,findUser.password);
    if(!isValid){
        return res.send("password is wrong");
    }
  
    res.locals.user = findUser;

    const token=jwt.sign(
    {
        username:username,
        password:password
    },
    "secretkey",
    { expiresIn: "1h" }
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
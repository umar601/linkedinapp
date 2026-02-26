const user = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function userSignUp(req,res){

    let {username,password}=req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    await user.insertOne({username:username,password:hashedPassword});

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

module.exports = {userSignUp}
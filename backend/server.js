const express = require("express");
const app = express();
const port = 8080;
const url = "mongodb://127.0.0.1/27017/linkenapp"
const middleware = require("./middlewares/middleware.js")
const databaseConnection = require("./connection.js")



// console.log(typeof(middleware))

databaseConnection(url);

middleware(app)


app.use("/",(req,res)=>{

    res.send("worling");

})
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})



